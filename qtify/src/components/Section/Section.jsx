import React from "react";
import SongCard from "../Card/SongCard";
import { Grid } from "@mui/material";

const Section = ({ title, type, data }) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <Grid container spacing={0.2}>
          {data.map((ele) => (
            <Grid item xs={12} sm={6} md={3} key={ele.id}>
              <SongCard cardDetails={ele} type={type} />
            </Grid>
          ))}
        </Grid>
        {/* {data.map((ele) => (
          <SongCard cardDetails={ele} type={type} key={ele.id} />
        ))} */}
      </div>
    </section>
  );
};

export default Section;
