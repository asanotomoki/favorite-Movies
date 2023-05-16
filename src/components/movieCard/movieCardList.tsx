import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MovieCard } from "./movieCard";
import { useMovieList } from "../../hook/useMovieList";
import { MovieType } from "../../type/api/Movie";
import { PrimaryButton } from "../shared/Button/PrimaryButton";
import { useAddFavorite } from "../../hook/useAddFavorite";
import { UsedButton } from "../shared/Button/UsedButton";
import { useShowMovieDetail } from "../../hook/useShowMovieDetail";

export const MovieCardList: React.FC = () => {
	const { MovieList } = useMovieList();
	const { addFavorite } = useAddFavorite();
	const { ShowMovie } = useShowMovieDetail();
	const [favorite, setFavorite] = useState<Array<boolean>>(Array(MovieList?.length).fill(false));

	
	const onClickFavorite = (movie: MovieType, index:number) => {
		addFavorite(movie);
		const newFavorite = [...favorite];
		newFavorite[index] = !newFavorite[index];
		setFavorite(newFavorite);
	}

	return (
		<SContainer onClick={() => { }}>
			{MovieList ? MovieList.map((movie, index) => {
				return (
					<SContainerButton>
						<SCardContainer onClick={() => ShowMovie(movie)} key={movie.id}>
							<MovieCard
								id={movie.id}
								title={movie.title}
								posterPath={movie.poster_path}
								releaseDate={movie.release_date}
							/>
						</SCardContainer>
						{
							!favorite[index] ? 
							<PrimaryButton onClick={() => onClickFavorite(movie, index)}>お気に入り</PrimaryButton>	:
							<UsedButton onClick={() => onClickFavorite(movie, index)}>削除</UsedButton>
						}
					</SContainerButton>
				)
			}) : null
			}
		</SContainer>
	)
}

const SContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const SCardContainer = styled.div`
	max-width: 250px;
	height: 430px;
	margin: 20px 0;
`;

const SContainerButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;