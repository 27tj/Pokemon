import { useNavigate, createSearchParams } from "react-router-dom";
import { IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// Comments: No need to add the react import for react version larger than 17.
import React from "react";
export default function Search() {
  const navigator = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.search.value;
    if (userInput) {
      const pokemon = { pokemon: userInput.toLowerCase() };
      // Comment: No need to put the path the search params separately. You can put them in a string and no need to use createSearchParams.
      navigator({
        pathname: `/result`,
        search: `?${createSearchParams(pokemon)}`,
      });
    }
  };
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search a Pokemon</label>
          <br />
          <input type="text" name="search" />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    </Grid>
  );
}
