import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import Pokemon from "../../components/Pokemon";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import { GET_BY_DEXMUMBER } from "../../config/GQL_QUERY";
import { v4 as uuidv4 } from "uuid";
import "./favorite.css";
export default function Favorite_Page() {
  const tmp_data = useSelector((state) => state.UserDataReducer);
  const collection = [];
  // Comment: Move the graphql out of the component.

  // Comment: You should put the following query inside the pokemon component.
  const RenderFavor = ({ num }) => {
    const { loading, data } = useQuery(GET_BY_DEXMUMBER, {
      variables: { pokemonNum: num },
    });
    if (loading) return <CircularProgress />;
    return (
      <div className="flex-item">
        <Pokemon pokemon={data.getPokemonByDexNumber} />
      </div>
    );
  };
  // Comment: Put this function into useEffect();
  for (let [key, value] of Object.entries(tmp_data)) {
    if (value.isFavor) {
      collection.push(key);
    }
  }
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <div className="grid-container">
        {collection.map((item) => (
          <RenderFavor key={uuidv4()} num={parseInt(item)} />
        ))}
      </div>
    </Grid>
  );
}
