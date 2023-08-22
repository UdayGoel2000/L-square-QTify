import React, { useState } from "react";
import SongCard from "../Card/SongCard";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, type, data, genres }) => {
  const genresData = [{ key: "all", label: "All" }];
  genres?.forEach((genre) => genresData.push(genre));
  const [selectedGenre, setSelectedGenre] = useState("all");
  const filteredData = (data, filteredGenre) =>
    filteredGenre === "all"
      ? data
      : data.filter((ele) => ele.genre.key === filteredGenre);

  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <section>
      {type === "album" ? (
        <div className={styles.albumHeader}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        </div>
      ) : (
        <div className={styles.songHeader}>
          <h3>{title}</h3>
          <div className={styles.genresHeader}>
            {genresData?.map((genre) => (
              <div className={styles.genreTab} key={genre.key}>
                <button
                  className={styles.genreButton}
                  id={genre.key}
                  onClick={(e) => setSelectedGenre(e.target.id)}
                >
                  {genre.label.toUpperCase()}
                </button>
                <div
                  className={
                    selectedGenre.toUpperCase() === genre.key.toUpperCase()
                      ? styles.genreSelectedIndicator
                      : styles.genreNotSelectedIndicator
                  }
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {data?.length ? (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data?.map((ele) => (
                <SongCard cardDetails={ele} type={type} Key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              renderCardComponent={(item) => (
                <SongCard cardDetails={item} type={type} key={item.id} />
              )}
              data={type === "song" ? filteredData(data, selectedGenre) : data}
            />
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </section>
  );
};

export default Section;
