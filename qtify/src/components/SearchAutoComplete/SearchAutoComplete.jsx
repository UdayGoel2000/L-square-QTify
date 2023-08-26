import React from "react";
import styles from "./SearchAutoComplete.module.css";

const SearchAutoComplete = ({ data, value, setValue }) => {
  return (
    <div className={styles.mainDiv}>
      {data?.map(
        ({ id, image, title, description, follows }) => (
          // value !== title && (
          <div
            key={id}
            name={title}
            className={styles.albumInfoCard}
            onClick={(e) => setValue(title)}
          >
            <div className={styles.albulData}>
              <img src={image} alt={title} />
              <div className={styles.typography}>
                <h3>{title}</h3>
                <h6>{description}</h6>
              </div>
            </div>
            <p>{follows} Follows</p>
          </div>
        )
        // )
      )}
    </div>
  );
};

export default SearchAutoComplete;
