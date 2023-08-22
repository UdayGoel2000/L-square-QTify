import React from "react";
import style from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

const Seacrh = () => {
  return (
    <>
      <form className={style.wrapper}>
        <input
          type="text"
          className={style.search}
          placeholder="Search a album of your choice"
        ></input>
        <button className={style.searchButton}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default Seacrh;
