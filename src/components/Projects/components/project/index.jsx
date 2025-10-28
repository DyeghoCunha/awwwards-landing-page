'use client';
import React from 'react'
import styles from './style.module.scss';

// <-- MUDANÇA 1: Receba a nova prop 'openNdaModal'
export default function Index({index, title, manageModal, openNdaModal}) {
  
  return (
    // <-- MUDANÇA 2: Adicione o onClick neste div
    <div 
      className={styles.project} 
      onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
      onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}
      onClick={openNdaModal} // <-- AQUI
    >
        <h2>{title}</h2>
        <p>Design & Development</p>
    </div>
  )
}