import { useContext } from "react";
import { MovieListContext, MovieListContextType } from "../provider/MovieList";

export const useMovieList = (): MovieListContextType => useContext(MovieListContext);