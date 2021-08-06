import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Game from "../models/Game";
import { getGameSearch } from "../services/BGAapiService";
import "./Details.css";

interface RouteParams {
  id: string;
}

const Details = () => {
  const { id } = useParams<RouteParams>();

  const [game, setGame] = useState<Game>();
  useEffect(() => {
    getGameSearch({ ids: id }).then((data) => {
      setGame(data.games[0]);
    });
  }, [id]);
  return (
    <div className="Details">
      <h2>{game?.name}</h2>
      <img src={game?.image_url} alt={`${game?.name}`} />
      <p>{game?.description_preview}</p>
      <p>
        Number of Players: {game?.min_players} - {game?.max_players} players
      </p>
      <p>
        Average playtime: {game?.min_playtime} - {game?.max_playtime} minutes
      </p>
      <p>{game?.msrp_text}</p>
    </div>
  );
};

export default Details;
