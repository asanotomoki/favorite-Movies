import React, { createContext, Dispatch, SetStateAction } from "react";
import { MovieType } from "../type/api/Movie";

export type MovieContextType = {
	Movie: MovieType | null;
	setMovie: Dispatch<SetStateAction<MovieType | null>>;
}

export const MovieContext = createContext<MovieContextType>(
	{} as MovieContextType
);

type Props = {
	children: React.ReactNode;
}

export const MovieProvider: React.FC<Props> = ({ children }) => {
	const [Movie, setMovie] = React.useState<MovieType | null>(null);
	return (
		<MovieContext.Provider value={{ Movie, setMovie }}>
			{children}
		</MovieContext.Provider>
	)
}