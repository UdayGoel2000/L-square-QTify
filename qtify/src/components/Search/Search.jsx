import React from "react";
import style from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

const Search = ({ placeholder, value, changeValue, setClick }) => {
  return (
    <>
      <form className={style.wrapper}>
        <input
          type="text"
          className={style.search}
          placeholder={placeholder}
          value={value}
          // onClick={setClick(true)}
          onChange={(e) => {
            changeValue(e.target.value);
            // setClick(true);
          }}
        ></input>
        <button className={style.searchButton}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default Search;
