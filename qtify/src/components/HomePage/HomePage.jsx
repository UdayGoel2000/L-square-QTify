import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import SongCard from "../Card/SongCard";
import songImage from "../../assets/song.png";
import useFetch from "../../hooks/useFetch";
import Section from "../Section/Section";

const HomePage = () => {
  let backendUrl = "https://qtify-backend-labs.crio.do";
  let cardObject = {
    id: "1",
    title: "New Bollywood",
    slug: "New Bollywood",
    image: songImage,
    follows: "100",
    songs: [1, 2, 3, 4, 5, 6],
  };

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
      <Section title={"Top Albums"} type="album" data={topSongsData} />
      <Section title={"New Albums"} type="album" data={newSongsData} />
      <SongCard cardDetails={cardObject} type={"album"} />
    </>
  );
};

export default HomePage;
