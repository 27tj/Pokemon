import { useNavigate, createSearchParams } from "react-router-dom";
import React from "react";
export default function Search() {
  const navigator = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.search.value) {
      const pokemon = { pokemon: event.target.search.value.toLowerCase() };
      navigator({
        pathname: `/result`,
        search: `?${createSearchParams(pokemon)}`,
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search a Pokemon</label>
        <br />
        <input type="text" name="search" />
        <button>Submit</button>
      </form>
    </div>
  );
}
