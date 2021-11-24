import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={`${styles.modal} ${show ? styles.displayBlock : styles.displayNone}`}>
      <section className={styles.modalMain}>
        {children}
        <button className={styles.closeButton} type="button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;