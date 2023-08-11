import React from "react";
import style from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

const Seacrh = () => {
  return (
    <>
      <form className={style.wrapper}>
        <input className={style.search}></input>
        <button className={style.searchButton}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default Seacrh;
