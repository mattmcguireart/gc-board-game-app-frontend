import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Game from "../models/Game";
import { getGameSearch } from "../services/BGAapiService";
import GameList from "./GameList";
import "./SearchReturn.css";

const SearchReturn = () => {
  const searchParams = Object.fromEntries(
    new URLSearchParams(useLocation().search)
  );
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGameSearch(searchParams).then((data) => {
      setGames(data.games);
    });
  }, []);
  return (
    <div className="SearchReturn">
      <GameList games={games} />
    </div>
  );
};

export default SearchReturn;
