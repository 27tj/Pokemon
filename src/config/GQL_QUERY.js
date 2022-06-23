import { gql } from "@apollo/client";

export const GET_BY_DEXMUMBER = gql`
  query GetPokemonByDexNumber($pokemonNum: Int!) {
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

export const GET_BY_NAME = gql`
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
