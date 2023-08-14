import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import SongCard from "../Card/SongCard";
import songImage from "../../assets/song.png";

const HomePage = () => {
  let cardObject = {
    id: "1",
    name: "New Bollywood",
    imgUrl: songImage,
    follows: "100 Follows",
  };
  // let arr = [];
  // for (let i = 0; i < 10; i++) {
  //   if (cardObject.id !== 1) {
  //     let newObj = { ...cardObject, id: +cardObject.id + i };
  //     arr.push(newObj);
  //   } else arr.push(cardObject);
  // }
  // console.log(arr);
  return (
    <>
      <NavBar />
      <HeroImage />
      {/* {arr.map((ele) => (
        <SongCard cardDetails={ele} key={ele.id} />
      ))} */}
      <SongCard cardDetails={cardObject} />
    </>
  );
};

export default HomePage;
