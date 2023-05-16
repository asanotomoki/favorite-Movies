import React from "react";
import { MovieType } from "../../type/api/Movie";
import { DetailImg } from "./detailImg";
import { DetailText } from "./detailText";

type Props = {
	movie: MovieType;
}

export const Detail: React.FC<Props> = (props) => {
	const { movie } = props;
	return (
		<>
			<DetailImg path={movie.poster_path} />
			<DetailText original_language={movie.original_language} overview={movie.overview} title={movie.title} original_title={movie.original_title}/>
		</>
	)
}