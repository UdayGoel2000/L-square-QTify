import React, { useEffect, useRef } from "react";
import style from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

const Search = ({ placeholder, value, changeValue, setClick }) => {
  const ref = useRef(null);

  const handleOutSide = (event) => {
    // changeValue("");
    if (ref.current && !ref.current.contains(event.target)) {
      setClick(false);
    } else setClick(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSide, true);
    return () => {
      document.removeEventListener("click", handleOutSide, true);
    };
  });

  return (
    <>
      <form className={style.wrapper}>
        <input
          ref={ref}
          type="text"
          id="searchBox"
          className={style.search}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            changeValue(e.target.value);
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
