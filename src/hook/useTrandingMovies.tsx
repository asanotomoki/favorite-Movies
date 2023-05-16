import axios from "axios";
import { useCallback } from "react";
import { MovieResponse } from "../type/api/Movie";
import { useMovieList } from "./useMovieList";

export const useTranding = () => {
	const { setMovieList } = useMovieList();
		const getTrandingMovies = useCallback(() => {
		axios.get<MovieResponse>('https://api.themoviedb.org/3/trending/movie/week?api_key=d7a89961d5cb2a7286ee1b8b7243ddd9&language=ja-JPN')
			.then((res) => {
				setMovieList(res.data.results);
			}).catch((err) => {
				console.log(err);
			}
			)
	}, [setMovieList])
	return { getTrandingMovies };
};