'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Header from '@/common/StickiCursor/header';
import StickyCursor from '@/common/StickiCursor/stickyCursor';
import { FiDownload } from "react-icons/fi"
import { LiaFileDownloadSolid } from "react-icons/lia";


export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }
const stickyElement = useRef(null);
const iconeAtual = <LiaFileDownloadSolid />;


  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <Image 
        src="/images/background2.png"
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>

<a
  href="/DyeghoCunha_SDA.pdf" // 1. O caminho para o arquivo na pasta /public
  download="DyeghoCunha_SDA.pdf" // 2. O nome que o arquivo terá no computador do usuário
  target="_blank" // 3. Boa prática (abre em nova aba se o download falhar)
  rel="noopener noreferrer" // 4. Segurança para target="_blank"
  className={styles.headerLink} // 5. Classe para corrigir o estilo (IMPORTANTE)
>
         <Header ref={stickyElement} icon={iconeAtual} />

</a>

      <StickyCursor stickyElement={stickyElement}/>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Data Insights That Drive Value -</p>
          <p ref={secondText}>Data Insights That Drive Value -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        <p>Data Analyst </p>
        <p>& Senior Tax Analyst</p>
      </div>
    </motion.main>
  )
}
