'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import NdaModal from '../Modal'

const projects = [
  {
    title: "Predictive Tax Optimization",
    src: "1.png",
    color: "rgba(0, 0, 0, 0.5)" // #000000
  },
  {
    title: "Automated Tax Audit",
    src: "4.png",
    color: "rgba(140, 140, 140,0.5 )" // #8C8C8C
  },
  {
    title: "Dynamic Pricing Strategy with BI",
    src: "5.png",
    color: "rgba(239, 232, 211, 0.5)" // #EFE8D3
  },
  {
    title: "Integrated Financial Risk Modeling",
    src: "6.png",
    color: "rgba(112, 109, 99, 0.5)" // #706D63
  }
  ,
  {
    title: "Cognitive Tax Insights",
    src: "7.png",
    color: "rgba(167, 170, 154, 0.5)" // #A7AA9A
  },
  {
    title: "Actionable Tax Performance",
    src: "8.png",
    color: "rgba(126, 138, 151, 0.5)" // #7E8A97
  },
  {
    title: "Data Engineering for Compliance",
    src: "9.png",
    color: "rgba(181, 165, 153, 0.5)" // #B5A599
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])
  const [ndaModalOpen, setNdaModalOpen] = useState(false);

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }
const handleProjectClick = () => {
    setNdaModalOpen(true); // Abre o modal de clique
    setModal({active: false, index: 0}); // Fecha o modal de hover
  }
  return (
  <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} manageModal={manageModal} openNdaModal={handleProjectClick} key={index}/>
        })
      }
    </div>
    <Rounded>
      <p>More work</p>
    </Rounded>
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
    <NdaModal
        active={ndaModalOpen}
        closeModal={() => setNdaModalOpen(false)}
      />
  </main>
  )
}
