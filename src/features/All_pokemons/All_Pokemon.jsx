import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Pokemon from "../../components/Pokemon";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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

export default function All_Pokemon() {
  const [num, setNum] = useState(1);
  const { loading, error, data } = useQuery(schema, {
    variables: { pokemonNum: num },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <form>
        <input />
      </form>
      <IconButton
        onClick={() => {
          num > 1 ? setNum(num - 1) : setNum(1);
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <div>
        <Pokemon pokemon={data.getPokemonByDexNumber} />
      </div>
      <IconButton onClick={() => setNum(num + 1)}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}
