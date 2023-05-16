import { useContext } from "react";
import { FavoriteMovieListContext, FavoriteMovieListContextType } from "../provider/FavoriteMovieList";

export const useFavoriteMovieList = (): FavoriteMovieListContextType => useContext(FavoriteMovieListContext);