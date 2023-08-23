import React, { useState } from "react";
import styles from "./FaqSection.module.css";
import { ReactComponent as AccordianArrow } from "../../assets/accordianArrow.svg";

const FaqSection = ({ data }) => {
  const [checkedFaq, setCheckedFaq] = useState("");
  return (
    <div className={styles.mainFaqDiv}>
      <p className={styles.header}>FAQs</p>
      <div className={styles.accordian}>
        {data.map((item) => (
          <div className={styles.accordianTab} key={item.key}>
            <input
              type="radio"
              id={item.key}
              className={styles.accordianToggle}
              name="toggle"
              checked={item.key === checkedFaq ? true : false}
              onClick={(e) =>
                checkedFaq === e.target.id
                  ? setCheckedFaq("")
                  : setCheckedFaq(e.target.id)
              }
              onChange={(e) => setCheckedFaq(e.target.id)}
            />
            <label className={styles.accordianTitleTab} htmlFor={item.key}>
              <p className={styles.accordianTitle}>{item.value.title}</p>
              <span className={styles.accordianArrowIcon}>
                <AccordianArrow />
              </span>
            </label>
            <div className={styles.accordianContent}>
              <p>{item.value.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
