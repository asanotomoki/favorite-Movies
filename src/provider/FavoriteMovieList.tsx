import React, { createContext, Dispatch, SetStateAction } from "react";
import { MovieType } from "../type/api/Movie";

export type FavoriteMovieListContextType = {
	FavoriteMovieList: MovieType[] | null;
	setFavoriteMovieList: Dispatch<SetStateAction<MovieType[] | null>>;
}

export const FavoriteMovieListContext = createContext<FavoriteMovieListContextType>(
	{} as FavoriteMovieListContextType
);

type Props = {
	children: React.ReactNode;
}

export const FavoriteMovieListProvider: React.FC<Props> = ({ children }) => {
	const [FavoriteMovieList , setFavoriteMovieList] = React.useState<MovieType[] | null>(null);
	return (
		<FavoriteMovieListContext.Provider value={{ FavoriteMovieList , setFavoriteMovieList }}>
			{children}
		</FavoriteMovieListContext.Provider>
	)
}