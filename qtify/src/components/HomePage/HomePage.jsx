import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import useFetch from "../../hooks/useFetch";
import Section from "../Section/Section";
import styles from "./HomePage.module.css";

const HomePage = () => {
  let backendUrl = "https://qtify-backend-labs.crio.do";

  // let url = {
  //   topSongs: "https://qtify-backend-labs.crio.do/albums/top",
  //   newSongs: "https://qtify-backend-labs.crio.do/albums/new",
  //   slug: "https://qtify-backend-labs.crio.do/album/:slug",
  //   songs: "https://qtify-backend-labs.crio.do/songs",
  //   geners: "https://qtify-backend-labs.crio.do/genres",
  // };

  const [topSongsData, setTopSongsData] = useFetch(
    `${backendUrl}/albums/top`,
    [],
    (err) => console.log(err)
  );

  const [newSongsData, setNewSongsData] = useFetch(
    `${backendUrl}/albums/new`,
    [],
    (err) => console.log(err)
  );

  return (
    <>
      <NavBar />
      <HeroImage />
      <div className={styles.sectionWrapper}>
        <Section title={"Top Albums"} type="album" data={topSongsData} />
        <Section title={"New Albums"} type="album" data={newSongsData} />
      </div>
    </>
  );
};

export default HomePage;
