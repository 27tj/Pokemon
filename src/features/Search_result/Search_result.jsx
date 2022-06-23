import { useSearchParams } from "react-router-dom";
import React from "react";
import Pokemon from "../../components/Pokemon";
import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
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

export default function Search_result_Page({ userData, Data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { loading, error, data } = useQuery(query, {
    variables: { pokemon: searchParams.get("pokemon") },
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <div>Pokemon not found</div>
        <Button variant="contained">Go Back</Button>
      </div>
    );
  return (
    <div>
      <Pokemon pokemon={data.getPokemon} />
      <Button variant="contained"></Button>
    </div>
  );
}
