import React from "react";
import styles from "./FaqSection.module.css";
import { ReactComponent as AccordianArrow } from "../../assets/accordianArrow.svg";

const FaqSection = () => {
  return (
    <div className={styles.mainFaqDiv}>
      <p className={styles.header}>FAQs</p>
      <div className={styles.faqSection}>
        <label htmlFor="first" className={styles.faqSectionTitle}>
          <p>Is QTify free to use?</p>
          <span className={styles.accordianArrowIcon}>
            <AccordianArrow />
          </span>
        </label>
        <input
          type="checkbox"
          name="accordian"
          className="accordian-toggle
        "
          id="first"
        />
        <div className={styles.faqSectionDetails}>
          <p>Yes! It is 100% free, and has 0% ads!</p>
        </div>
      </div>
      <div className={styles.faqSection}>
        <label htmlFor="second" className={styles.faqSectionTitle}>
          <p>Can I download and listen to songs offline?</p>
          <span className={styles.accordianArrowIcon}>
            <AccordianArrow />
          </span>
        </label>
        <input
          type="checkbox"
          name="accordian"
          className="accordian-toggle
        "
          id="second"
        />
        <div className={styles.faqSectionDetails}>
          <p>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
