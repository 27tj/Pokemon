import { gql, useQuery, query } from "@apollo/client";
import { useState } from "react";
import Pokemon from "../../components/Pokemon";

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
      <button
        onClick={() => {
          num > 1 ? setNum(num - 1) : setNum(1);
        }}
      >
        previous
      </button>
      <div>
        <Pokemon pokemon={data.getPokemonByDexNumber} />
      </div>
      <button onClick={() => setNum(num + 1)}>Next</button>
    </div>
  );
}
