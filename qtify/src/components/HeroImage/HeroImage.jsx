import React from "react";
import styles from "./HeroImage.module.css";
import VibratingHeadphone from "../../assets/vibrating-headphone.png";

const HeroImage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <p className={styles.hero_typography}>100 Thousand Songs, ad-free</p>
        <p className={styles.hero_typography}>
          Over thousands podcast episodes
        </p>
      </div>
      <img
        className={styles.VibratingHeadphone}
        src={VibratingHeadphone}
        alt="VibratingHeadphone"
      />
    </div>
  );
};

export default HeroImage;
