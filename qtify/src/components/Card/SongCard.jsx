import React from "react";
import { Tooltip } from "@mui/material";

import styles from "./SongCard.module.css";

const SongCard = ({ cardDetails, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { title, image, slug, follows, songs } = cardDetails;

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div style={{ width: 159 }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                href="/"
              >
                <div className={styles.cardMainDiv}>
                  <img
                    style={{
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                    src={image}
                    alt={slug}
                    width={159}
                    height={170}
                  />
                  <div className={styles.followerBox}>
                    <p className={styles.songcard_typography_card}>
                      {follows} Follows
                    </p>
                  </div>
                </div>
                <div className={styles.banner}>
                  <p style={{ paddingTop: 6 }}>{title}</p>
                </div>
              </a>
            </div>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default SongCard;
