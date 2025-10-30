"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// ⬇️⬇️ CORREÇÃO PRINCIPAL AQUI ⬇️⬇️
// Renomeie a função de "index" para "Magnetic" (ou qualquer nome com letra maiúscula)
export default function Magnetic({ children }) {
  
  // Agora 'useRef' e 'useEffect' são permitidos aqui
  const magnetic = useRef(null);

  useEffect(() => {
    // É uma boa prática guardar o elemento atual em uma variável
    // para usar na função de limpeza.
    const el = magnetic.current;

    // 1. VERIFICAÇÃO: Garante que o elemento existe
    if (el) {
      console.log(children);

      const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = el.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      };

      const onMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      // 2. ADICIONA OS LISTENERS
      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);

      // 3. FUNÇÃO DE LIMPEZA (CLEANUP)
      // Remove os listeners quando o componente for "desmontado"
      return () => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseleave", onMouseLeave);
      };
    }

  // ⬇️ CORREÇÃO DO WARNING AQUI ⬇️
  // O seu log de erro avisou que 'children' estava faltando aqui
  }, [children]); 

  return (
    React.cloneElement(children, { ref: magnetic })
  );
}