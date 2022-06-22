import React from "react";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { gql, useQuery } from "@apollo/client";
import Pokemon from "../../components/Pokemon";
export default function Favorite_Page() {
  const [userData, setUserData] = useLocalStorage("userData", {});
  //const data = Object.entries({ ...userData }).map((e) => ({ [e[0]]: e[1] }));
  const tmp_data = { ...userData };
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
      collection.push(tmp_data[key].number);
    }
  }
  console.log(typeof parseInt(9));
  return collection.map((item) => <RenderFavor key={item} num={item} />);
}
