import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          component={Link}
          to="/"
        >
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon Data
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/all">
            All Pokemon
          </Button>
          <Button color="inherit" component={Link} to="/favorite">
            Favorite
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
