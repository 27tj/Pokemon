import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export default function Pokemon({ pokemon }) {
  const [userData, setUserData] = useLocalStorage("userData", {});
  const [hover, setHover] = useState(false);
  const handleClick_heart = (name) => {
    // createNewUserData();
    let newData = { ...userData };
    if (!userData[pokemon.species]) {
      newData = {
        ...newData,
        [pokemon.species]: {
          ballCount: 0,
          isFavor: true,
          number: parseInt(pokemon.num),
        },
      };
    } else {
      newData[name].isFavor = !newData[name].isFavor;
    }

    setUserData(newData);
  };
  const handleClick_img = (name) => {
    let newCount = { ...userData };
    if (!userData[pokemon.species]) {
      newCount = {
        ...newCount,
        [pokemon.species]: {
          ballCount: 1,
          isFavor: false,
          number: parseInt(pokemon.num),
        },
      };
    } else {
      newCount[name].ballCount = newCount[name].ballCount + 1;
    }
    setUserData(newCount);
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
          {!userData[pokemon.species] ? 0 : userData[pokemon.species].ballCount}
        </div>
        <div
          className={
            !userData[pokemon.species]
              ? "heart"
              : userData[pokemon.species].isFavor
              ? "heart checked"
              : "heart"
          }
          onClick={() => handleClick_heart(pokemon.species)}
        >
          <img
            src={
              !userData[pokemon.species]
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/2166px-Heart_icon_red_hollow.svg.png"
                : userData[pokemon.species].isFavor
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
          onClick={() => handleClick_img(pokemon.species)}
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
