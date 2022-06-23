import { useSearchParams, Link } from "react-router-dom";
import React from "react";
import Pokemon from "../../components/Pokemon";
import { gql, useQuery } from "@apollo/client";
import { Button, Grid, CircularProgress } from "@mui/material";
const GET_POKEMON_BY_NAME = gql`
  query GetPokemon($pokemon: PokemonEnum!) {
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
  const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { pokemon: searchParams.get("pokemon") },
  });

  if (loading)
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  if (error)
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <div>Pokemon not found</div>
          <Button variant="contained" component={Link} to="/">
            Go Back
          </Button>
        </div>
      </Grid>
    );
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <Pokemon pokemon={data.getPokemon} />
        <Button variant="contained" component={Link} to="/">
          Go Back
        </Button>
      </div>
    </Grid>
  );
}
