import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../store";
import { setFavor, increment } from "../reduers/action";
import "./Pokemon.css";
export default function Pokemon({ pokemon }) {
  const [hover, setHover] = useState(false);
  const favorState = useSelector((state) => {
    if (state.UserDataReducer[pokemon.num] === undefined) {
      return false;
    } else {
      return state.UserDataReducer[pokemon.num].isFavor;
    }
  });
  const count = useSelector((state) => {
    if (state.UserDataReducer[pokemon.num] === undefined) {
      return 0;
    } else {
      return state.UserDataReducer[pokemon.num].value;
    }
  });
  const handleClick_heart = (pokemonID) => {
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
          x {count}
        </div>
        <div
          className={favorState ? "heart checked" : "heart"}
          onClick={() => handleClick_heart(pokemon.num)}
        >
          <img
            src={
              !favorState
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/2166px-Heart_icon_red_hollow.svg.png"
                : favorState
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/2258px-Love_Heart_SVG.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/2166px-Heart_icon_red_hollow.svg.png"
            }
            width="20"
            height="20"
          />
        </div>
      </div>
      <div className="bottom-container">
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
          <div className="name">
            {pokemon.species.charAt(0).toUpperCase() + pokemon.species.slice(1)}
          </div>
          <div className="weight">Weight: {pokemon.weight} kg</div>
          <div className="height">Height: {pokemon.height} m</div>
          <div className="type">Type: {pokemon.types.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}
