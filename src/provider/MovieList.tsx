import React, { createContext, Dispatch, SetStateAction } from "react";
import { MovieType } from "../type/api/Movie";

export type MovieListContextType = {
	MovieList: MovieType[] | null;
	setMovieList: Dispatch<SetStateAction<MovieType[] | null>>;
}

export const MovieListContext = createContext<MovieListContextType>(
	{} as MovieListContextType
);

type Props = {
	children: React.ReactNode;
}

export const MovieListProvider: React.FC<Props> = ({ children }) => {
	const [MovieList , setMovieList] = React.useState<MovieType[] | null>(null);
	return (
		<MovieListContext.Provider value={{ MovieList , setMovieList }}>
			{children}
		</MovieListContext.Provider>
	)
}