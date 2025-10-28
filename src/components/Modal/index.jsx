'use client'
import styles from './style.module.scss'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from './utils/useMousePosition'; // Ajuste o caminho se necessário
import Rounded from './../../common/RoundedButton'; // Importe seu botão

// Variantes para o modal aparecer (fade in)
const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

// Renomeei o componente de 'modal' para 'NdaModal' (nomes de componente devem começar com maiúscula)
export default function NdaModal({ active, closeModal }) {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition(); // Este hook agora rastreia o mouse na tela inteira
  const size = isHovered ? 600 : 40;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className={styles.modalOverlay}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* Adiciona um botão para fechar o modal */}
          <div className={styles.closeButton} onClick={closeModal}>
            <Rounded>
              <p>Close</p>
            </Rounded>
          </div>

          {/* Este é o seu 'main' original, agora como 'modalContent' */}
          <main className={styles.modalContent}>
            <motion.div
              className={styles.mask}
              animate={{
                WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                WebkitMaskSize: `${size}px`,
              }}
              transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
              <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
              I sincerely apologize, but this entire section is still under active configuration and development. I promise it will be ready very soon. In the meantime, please feel free to contact me directly with any questions.
              </p>
            </motion.div>

            <div className={styles.body}>
              <p>Due to a <span>Non-Disclosure Agreement</span>, the final dashboard for this project is confidential. While I cannot display the visuals, you can <span>hover</span> over this to discover the key challenges, solutions, and technologies used</p>
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}