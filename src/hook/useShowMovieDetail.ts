import { useNavigate } from "react-router-dom";

import { MovieType } from "../type/api/Movie";
import { useMovieDetail } from "./useMovieDetail";
export const useShowMovieDetail = () => {
	const navigate = useNavigate();
	const { setMovie } = useMovieDetail();

	const ShowMovie = (movie: MovieType) => {
		setMovie(movie);
		navigate(`/movie/${movie.id}`);
	}
	return { ShowMovie };
}