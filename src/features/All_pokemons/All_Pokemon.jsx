import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Pokemon from "../../components/Pokemon";
import { IconButton, Grid, CircularProgress, Alert } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./All_Pokemon.css";
import { GET_BY_DEXMUMBER } from "../../config/GQL_QUERY";
// Comment: Add the function name after query.

export default function All_Pokemon() {
  const [num, setNum] = useState(1);
  const { loading, error, data } = useQuery(GET_BY_DEXMUMBER, {
    variables: { pokemonNum: num },
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
        <Alert severity="error">Server error</Alert>
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
      <div className="All-Pokemon">
        <IconButton
          onClick={() => {
            // Comment: the ternary can be put inside setNum.
            setNum((prevnum) => (prevnum > 1 ? prevnum - 1 : 1));
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
    </Grid>
  );
}
