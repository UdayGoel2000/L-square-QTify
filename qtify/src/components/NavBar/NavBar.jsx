import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Seacrh from "../Search/Search";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Seacrh />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default NavBar;
