import React from "react";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { gql, useQuery } from "@apollo/client";
import Pokemon from "../../components/Pokemon";
import store from "../../store";
import stateSelector from "../../reduers/selector";
export default function Favorite_Page() {
  const [userData, setUserData] = useLocalStorage("userData", {});
  //const data = Object.entries({ ...userData }).map((e) => ({ [e[0]]: e[1] }));
  const tmp_data = { ...stateSelector(store.getState()) };
  console.log(Object.entries(tmp_data));
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
    console.log(value.isFavor);
    // if (value.isFavor) {
    //   collection.push(tmp_data[key].number);
    // }
  }
  return collection.map((item) => <RenderFavor key={item} num={item} />);
}
