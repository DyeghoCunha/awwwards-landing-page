import { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';

const Header = forwardRef(function index({icon}, ref) {
  return (
    <div className={styles.header}>
        <Magnetic>
          <div className={styles.burger}>
            <div className={styles.iconWrapper}>
            {icon}
          </div>
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Header