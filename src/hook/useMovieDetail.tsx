import { useContext } from "react";
import { MovieContextType, MovieContext } from "../provider/DetailMovie";

export const useMovieDetail = (): MovieContextType => useContext(MovieContext);

