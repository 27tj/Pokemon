import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Search</Link>
      <Link to="/favorite">Favorite</Link>
      <Link to="/all">All Pokemon</Link>
    </nav>
  );
}
