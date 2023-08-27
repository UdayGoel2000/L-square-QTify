import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import useFetch from "../../hooks/useFetch";
import Section from "../Section/Section";
import styles from "./HomePage.module.css";
import FaqSection from "../FaqSection/FaqSection";
import SearchAutoComplete from "../SearchAutoComplete/SearchAutoComplete";

const HomePage = () => {
  let backendUrl = "https://qtify-backend-labs.crio.do";

  // let url = {
  //   topSongs: "https://qtify-backend-labs.crio.do/albums/top",
  //   newSongs: "https://qtify-backend-labs.crio.do/albums/new",
  //   slug: "https://qtify-backend-labs.crio.do/album/:slug",
  //   songs: "https://qtify-backend-labs.crio.do/songs",
  //   geners: "https://qtify-backend-labs.crio.do/genres",
  // };

  const topSongsData =
    // [topSongsData, setTopSongsData]
    useFetch(`${backendUrl}/albums/top`, [], (err) => console.log(err));

  const newSongsData =
    // [newSongsData, setNewSongsData]
    useFetch(`${backendUrl}/albums/new`, [], (err) => console.log(err));

  const songsData =
    // [songsData, setSongsData]
    useFetch(`${backendUrl}/songs`, [], (err) => console.log(err));

  const genresData =
    // [genresData, setGenresData]
    useFetch(`${backendUrl}/genres`, [], (err) => console.log(err));

  const faqData = [
    {
      key: "first",
      value: {
        title: "Is QTify free to use?",
        content: "Yes! It is 100% free, and has 0% ads!",
      },
    },
    {
      key: "second",
      value: {
        title: "Can I download and listen to songs offline?",
        content:
          "Sorry, unfortunately we don't provide the service to download any songs.",
      },
    },
  ];
  const [titleSearch, setTitleSearch] = useState("");
  const [click, setClick] = useState(false);
  const [dataForSeacrh, setDataForSeacrh] = useState([
    ...topSongsData,
    ...newSongsData,
  ]);
  useEffect(() => {
    if (!titleSearch) setDataForSeacrh([...topSongsData, ...newSongsData]);
    else {
      performSearch(titleSearch.toLowerCase());
    }
  }, [titleSearch, click]);

  const performSearch = (text) => {
    const arr = [...topSongsData, ...newSongsData]?.filter(({ title }) =>
      title.toLowerCase().includes(text)
    );
    setDataForSeacrh(arr);
  };
  return (
    <>
      <NavBar
        value={titleSearch}
        setTitleSearch={setTitleSearch}
        setClick={setClick}
      />
      <div
        className={styles.autoCompleteDiv}
        style={{
          display: click && dataForSeacrh?.length ? "block" : "none",
        }}
      >
        <SearchAutoComplete
          data={titleSearch?.length ? dataForSeacrh : topSongsData}
          value={titleSearch}
          setValue={(value) => setTitleSearch(value)}
        />
      </div>
      <HeroImage />
      <div className={styles.sectionWrapper}>
        <Section
          title={"Top Albums"}
          type="album"
          genres={[]}
          data={topSongsData}
        />
        <Section
          title={"New Albums"}
          type="album"
          genres={[]}
          data={newSongsData}
        />
        <hr />
        <Section
          title={"Songs"}
          type="song"
          genres={genresData.data}
          data={songsData}
        />
        <hr />
      </div>
      <FaqSection data={faqData} />
    </>
  );
};

export default HomePage;
