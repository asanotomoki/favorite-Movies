import axios from "axios";
import { useCallback } from "react";
import { useMovieList } from "./useMovieList";

import { MovieResponse } from "../type/api/Movie";

export const useSearchMovies = () => {
	const { setMovieList } = useMovieList();
	
	const getSearchMovies = useCallback((search: string) => {
		const api_key = process.env.REACT_APP_API_KEY
		const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}&include_adult=false&language=ja-JPN&page=1&region=ja&adult=false`;
		axios.get<MovieResponse>(searchUrl)
			.then((res) => {
				setMovieList(res.data.results);
			}).catch((err) => {
				console.log(err);
			}
			)
	}, [setMovieList])
	return { getSearchMovies };
};