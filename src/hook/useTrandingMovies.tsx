import axios from "axios";
import { useCallback } from "react";
import { MovieResponse } from "../type/api/Movie";
import { useMovieList } from "./useMovieList";

export const useTranding = () => {
	const { setMovieList } = useMovieList();
		const getTrandingMovies = useCallback(() => {
		const api_key = process.env.REACT_APP_API_KEY
		const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=ja-JPN&adult=false`
		axios.get<MovieResponse>(url)
			.then((res) => {
				setMovieList(res.data.results);
			}).catch((err) => {
				console.log(err);
			}
			)
	}, [setMovieList])
	return { getTrandingMovies };
};