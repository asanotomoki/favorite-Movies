import React from "react";
import styled from "styled-components";

import { BasicTemplate } from "../template/BasicTemplate";
import { MovieCard } from "../components/movieCard/movieCard";
import { useFavoriteMovieList } from "../hook/useFavoriteMovieList";
import { useShowMovieDetail } from "../hook/useShowMovieDetail";
import { UsedButton } from "../components/shared/Button/UsedButton";
import { useRemoveFavorite } from "../hook/useRemoveFavorite";
export const Favorite: React.FC = () => {
	const { FavoriteMovieList } = useFavoriteMovieList();
	const { ShowMovie } = useShowMovieDetail();
	const { RemoveFavorite } = useRemoveFavorite();
	return (
		<>
			<BasicTemplate>
				<h1>お気に入りリスト</h1>
				<SContainer>
					{FavoriteMovieList ? FavoriteMovieList.map((movie) => {
						return (
							<SContainerButton key={movie.id}>
								<SCardContainer  onClick={() => ShowMovie(movie)}>
									<MovieCard
										id={movie.id}
										title={movie.title}
										posterPath={movie.poster_path}
										releaseDate={movie.release_date}
									/>
								</SCardContainer>
								<UsedButton onClick={() => RemoveFavorite(movie)}>削除</UsedButton>
							</SContainerButton>
						)
					}) : null
					}
				</SContainer>
			</BasicTemplate>
		</>
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