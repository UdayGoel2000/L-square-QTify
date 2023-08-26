import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./NavBar.module.css";

const NavBar = ({ value, setTitleSearch, setClick }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search
        placeholder={"Search a album of your choice"}
        value={value}
        changeValue={setTitleSearch}
        setClick={setClick}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default NavBar;
