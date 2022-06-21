import { useParams, useSearchParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Pokemon from "../../components/Pokemon";
import { gql, useQuery } from "@apollo/client";
const query = gql`
  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      num
      species
      types
      height
      weight
      sprite
    }
  }
`;

export default function Search_result_Page({ userData, setUserData }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { loading, error, data } = useQuery(query, {
    variables: { pokemon: searchParams.get("pokemon") },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Pokemon pokemon={data.getPokemon} />
    </div>
  );
}
