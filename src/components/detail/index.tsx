import React from "react";
import { useState } from "react";
import { MovieType } from "../../type/api/Movie";
import { DetailImg } from "./detailImg";
import { DetailText } from "./detailText";
import { PrimaryButton } from "../shared/Button/PrimaryButton";
import { UsedButton } from "../shared/Button/UsedButton";
import { useAddFavorite } from "../../hook/useAddFavorite";
type Props = {
	movie: MovieType;
}

export const Detail: React.FC<Props> = (props) => {
	const { movie } = props;
	const { addFavorite } = useAddFavorite();
	const [favorite, setFavorite] = useState(false);
	const onClickFavorite = (movie: MovieType) => {
		addFavorite(movie);
		setFavorite(!favorite);
	}
	return (
		<>
			<DetailImg path={movie.poster_path} />
			<DetailText original_language={movie.original_language} overview={movie.overview} title={movie.title} original_title={movie.original_title} />
			{
				!favorite ?
					<PrimaryButton onClick={() => onClickFavorite(movie)}>お気に入り</PrimaryButton> :
					<UsedButton onClick={() => onClickFavorite(movie)}>削除</UsedButton>
			}
		</>
	)
}