import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "../features/Search/Search";
import Favorite_Page from "../features/Favorite/Favorite_Page";
import Search_result from "../features/Search_result/Search_result";
import All_Pokemon from "../features/All_pokemons/All_Pokemon";
import NavBar from "../components/NavBar";
import Test_Page from "../features/test";
import Error_Page from "../features/error_page/error";
export default function HomeRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/favorite" element={<Favorite_Page />} />
        <Route path="/result" element={<Search_result />} />
        <Route path="/all" element={<All_Pokemon />} />
        <Route path="/test" element={<Test_Page />} />
        <Route path="*" element={<Error_Page />} />
      </Routes>
    </Router>
  );
}
