import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  CardHeader,
  CardMedia,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../store";
import { setFavor, increment } from "../reduers/action";
import { Favorite } from "@mui/icons-material";

const PokemonCard = (pokemon) => {
  // const [hover, setHover] = useState(false);
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
  // const handleHover = () => {
  //   setHover(!hover);
  // };
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <div className="count">
            <CardMedia component="img" width="20" height="20" />
            <Typography>x {count}</Typography>
          </div>
          <div className="favorites">
            <IconButton>
              {favorState ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
        </CardHeader>
        <CardMedia
          component="img"
          height="100"
          width="100"
          image={pokemon.sprite}
        />
        <Typography>
          {pokemon.species}
          <br />
          weight: {pokemon.weight} kg <br />
          height: {pokemon.height} kg <br />
          Type: {pokemon.type.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard();
