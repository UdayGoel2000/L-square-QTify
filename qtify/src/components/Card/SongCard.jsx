import React from "react";

import styles from "./SongCard.module.css";

const SongCard = ({ cardDetails }) => {
  let { name, imgUrl, follows } = cardDetails;
  return (
    <div style={{ width: 159 }}>
      <a
        style={{
          textDecoration: "none",
          color: "white",
        }}
        href="https://www.google.co.in/"
      >
        <div className={styles.cardMainDiv}>
          <img
            style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            src={imgUrl}
            alt={name}
            width={159}
            height={170}
          />
          <div className={styles.followerBox}>
            <p className={styles.songcard_typography_card}>{follows}</p>
          </div>
        </div>
        <p style={{ paddingTop: 6 }}>{name}</p>
      </a>
    </div>
  );
};

export default SongCard;
