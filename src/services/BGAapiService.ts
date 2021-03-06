import axios from "axios";
import BGAResponse from "../models/BGAResponse";
import Game from "../models/Game";

const baseUrl = process.env.REACT_APP_API_URL;
const client_id = process.env.REACT_APP_BGA_CLIENT_ID;

export const getGameSearch = async (search: any): Promise<BGAResponse> => {
  let params: any = { ...search, client_id: client_id };
  const response = await axios.get(
    "https://api.boardgameatlas.com/api/search?",
    { params }
  );
  return response.data;
};

export const getGameList = async (uid: string): Promise<Game[]> => {
  const response = await axios.get(baseUrl! + `/${encodeURIComponent(uid)}`);
  return response.data;
};

export const postGameToList = async (game: Game): Promise<Game> => {
  const response = await axios.post(baseUrl!, game);
  return response.data;
};

export const removeGameFromList = async (id: string): Promise<void> => {
  const response = await axios.delete(baseUrl! + `/${encodeURIComponent(id)}`);
  return response.data;
};

export const getAverages = async (uid: string): Promise<any> => {
  const response = await axios.get(
    baseUrl! + `/recommend/${encodeURIComponent(uid)}`
  );
  return response.data;
};
