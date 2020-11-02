import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Header.module.css";

function Header() {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames={styles} unmountOnExit>
      <header>
        <h2 className={styles.logo}>Phonebook</h2>
      </header>
    </CSSTransition>
  );
}
export default Header;
