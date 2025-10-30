"use client";
import React from 'react';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

// ⬇️⬇️ CORREÇÃO 1: Renomeado de "index" para "RoundedButton"
export default function RoundedButton({ children, backgroundColor = "#414c3f", ...attributes }) {

  const circle = useRef(null);
  const timeline = useRef(null);
  
  // ⬇️⬇️ CORREÇÃO 2: 'timeoutId' agora usa useRef para persistir
  const timeoutId = useRef(null); 

  useEffect(() => {
    // Cria a timeline
    timeline.current = gsap.timeline({ paused: true })
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");

    // ⬇️ BOA PRÁTICA: Função de Limpeza (Cleanup)
    // Será executada quando o componente "desmontar" (sair da tela)
    return () => {
      // Limpa o timeout se ele ainda estiver pendente
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      // "Mata" a timeline do GSAP para liberar memória
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []); // Array vazio está correto, só roda 1 vez.

  const manageMouseEnter = () => {
    // Agora precisamos ler e escrever a propriedade ".current"
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null; // Limpa o ref
    }
    timeline.current.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    // Escreve o ID do timeout no ".current" do ref
    timeoutId.current = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      {/* Não é mais necessário passar as funções como arrow function inline,
        podemos passar a referência da função diretamente.
      */}
      <div 
        className={styles.roundedButton} 
        style={{ overflow: "hidden" }} 
        onMouseEnter={manageMouseEnter} 
        onMouseLeave={manageMouseLeave} 
        {...attributes}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
      </div>
    </Magnetic>
  );
}