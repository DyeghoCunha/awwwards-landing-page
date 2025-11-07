'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './style.module.scss';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';

export default function StickyCursor({stickyElement}) {

  const [isHovered, setIsHovered] = useState(false);
  // O cursor agora começa visível
  const [isVisible, setIsVisible] = useState(true); 
  const cursor = useRef(null);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1)
  }

  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const rotate = useCallback((distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, {duration: 0})
  }, [cursor]);

  const manageMouseOver = useCallback(() => {
    setIsHovered(true);
  }, [setIsHovered]);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, {duration: 0.1}, { type: "spring" });
  }, [setIsHovered, cursor]);

  const manageMouseMove = useCallback(e => {
    const { clientX, clientY } = e; // Posição Y do mouse na tela

    // --- MUDANÇA PRINCIPAL AQUI ---
    // A lógica agora é baseada no clientY
    // Esconde se o mouse estiver nos primeiros 100px do topo da TELA
    const visible = clientY > 100;
    setIsVisible(visible);
    // ---------------------------------

    const localCursorSize = isHovered ? 60 : 15; 

    if (stickyElement.current) {
      const { left, top, height, width } = stickyElement.current.getBoundingClientRect();
      const center = {x: left + width / 2, y: top + height / 2};

      if(isHovered){
        const distance = {x: clientX - center.x, y: clientY - center.y};
        rotate(distance);
        const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
        const newScaleX = transform(absDistance, [0, height/2], [1, 1.3]);
        const newScaleY = transform(absDistance, [0, width/2], [1, 0.8]);
        scale.x.set(newScaleX);
        scale.y.set(newScaleY);
        mouse.x.set((center.x - localCursorSize / 2) + (distance.x * 0.1));
        mouse.y.set((center.y - localCursorSize / 2) + (distance.y * 0.1));
      } else {
        mouse.x.set(clientX - localCursorSize / 2);
        mouse.y.set(clientY - localCursorSize / 2);
      }
    } else {
      mouse.x.set(clientX - localCursorSize / 2);
      mouse.y.set(clientY - localCursorSize / 2);
    }
    // Adicionei 'setIsVisible' nas dependências do useCallback
  }, [isHovered, stickyElement, mouse, scale, rotate, setIsVisible]); 

  // <-- REMOVIDO: O useEffect que ouvia o 'scroll' foi removido -->

  useEffect( () => {
    const element = stickyElement.current;
    if (element) {
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
    }
    // O 'manageMouseMove' agora controla a visibilidade
    window.addEventListener("mousemove", manageMouseMove); 
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      }
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [stickyElement, manageMouseOver, manageMouseLeave, manageMouseMove]);

  const template = ({rotate, scaleX, scaleY}) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
  }

  return (
    <div className={styles.cursorContainer}>
      <motion.div 
        transformTemplate={template}
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }} 
        animate={{
          width: cursorSize,
          height: cursorSize,
          opacity: isVisible ? 1 : 0 // A animação de opacidade agora depende do 'clientY'
        }}
        transition={{ 
          opacity: { duration: 0.3, ease: 'easeOut' }
        }}
        className={styles.cursor}
        ref={cursor}>
      </motion.div>
    </div>
  )
}