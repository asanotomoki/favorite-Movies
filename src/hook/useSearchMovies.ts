import axios from "axios";
import { useCallback } from "react";
import { useMovieList } from "./useMovieList";

import { MovieResponse } from "../type/api/Movie";

export const useSearchMovies = () => {
	const { setMovieList } = useMovieList();
	const getSearchMovies = useCallback((search: string) => {
		const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=d7a89961d5cb2a7286ee1b8b7243ddd9&query=${search}&include_adult=false&language=ja-JPN&page=1&region=ja`;
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