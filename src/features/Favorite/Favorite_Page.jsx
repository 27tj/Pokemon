import React from "react";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Pokemon from "../../components/Pokemon";
import { useSelector } from "react-redux";
export default function Favorite_Page() {
  const tmp_data = useSelector((state) => state.UserDataReducer);
  const collection = [];
  const schema = gql`
    query ($pokemonNum: Int!) {
      getPokemonByDexNumber(number: $pokemonNum) {
        num
        species
        types
        weight
        color
        sprite
        height
      }
    }
  `;
  const RenderFavor = ({ num }) => {
    const { loading, error, data } = useQuery(schema, {
      variables: { pokemonNum: num },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return <Pokemon pokemon={data.getPokemonByDexNumber} />;
  };
  for (let [key, value] of Object.entries(tmp_data)) {
    if (value.isFavor) {
      collection.push(key);
    }
  }
  return collection.map((item) => (
    <RenderFavor key={item} num={parseInt(item)} />
  ));
}
