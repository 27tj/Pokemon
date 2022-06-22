import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import stateSelector from "../reduers/selector";
import store from "../store";
import { setFavor, increment } from "../reduers/action";
export default function Pokemon({ pokemon }) {
  const [hover, setHover] = useState(false);
  const handleClick_heart = (pokemonID) => {
    console.log(stateSelector(store.getState()));
    store.dispatch(setFavor(pokemonID));
  };
  const handleClick_img = (pokemonID) => {
    store.dispatch(increment(pokemonID));
  };
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <div className={`container ${pokemon.species}`}>
      <div className="top-container">
        <div className="ballCount">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
            width="20"
            height="20"
          />
          x
          {!stateSelector(store.getState())[pokemon.num]
            ? 0
            : stateSelector(store.getState())[pokemon.num].value}
        </div>
        <div
          className={true ? "heart" : false ? "heart checked" : "heart"}
          onClick={() => handleClick_heart(pokemon.num)}
        >
          <img
            src={
              !true
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/2166px-Heart_icon_red_hollow.svg.png"
                : false
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/2258px-Love_Heart_SVG.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/2166px-Heart_icon_red_hollow.svg.png"
            }
            width="20"
            height="20"
          />
        </div>
      </div>
      <div className="img-container">
        <img
          src={
            hover
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
              : pokemon.sprite
          }
          width="100"
          height="100"
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleHover()}
          onClick={() => handleClick_img(pokemon.num)}
        />
      </div>
      <div className="text-container">
        <div className="name">{pokemon.species}</div>
        <div className="weight">Weight: {pokemon.weight} kg</div>
        <div className="height">Height: {pokemon.height} m</div>
        <div className="type">Type: {pokemon.types.join(", ")}</div>
      </div>
    </div>
  );
}
