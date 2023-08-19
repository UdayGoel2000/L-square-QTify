import React, { useState } from "react";
import SongCard from "../Card/SongCard";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";

const Section = ({ title, type, data }) => {
  const [carouselToggle, setCarouselToggle] = useState(false);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <section>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data?.length ? (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <SongCard cardDetails={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </section>
  );
};

export default Section;
