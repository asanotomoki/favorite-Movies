import React from "react";
import styled from "styled-components";

import { BasicTemplate } from "../template/BasicTemplate";
import { MovieCard } from "../components/movieCard/movieCard";
import { useFavoriteMovieList } from "../hook/useFavoriteMovieList";
import { useShowMovieDetail } from "../hook/useShowMovieDetail";
export const Favorite: React.FC = () => {
	const { FavoriteMovieList } = useFavoriteMovieList();
	const { ShowMovie } = useShowMovieDetail();
	return (
		<>
			<BasicTemplate>
				<h1>お気に入りリスト</h1>
				<SContainer>
					{FavoriteMovieList ? FavoriteMovieList.map((movie) => {
						return (
							<SContainerButton onClick={() => ShowMovie(movie)} key={movie.id}>
								<SCardContainer>
									<MovieCard
										id={movie.id}
										title={movie.title}
										posterPath={movie.poster_path}
										releaseDate={movie.release_date}
									/>
								</SCardContainer>
								{/*{
							!favorite[index] ? 
							<PrimaryButton onClick={() => onClickFavorite(movie, index)}>お気に入り</PrimaryButton>	:
							<UsedButton onClick={() => onClickFavorite(movie, index)}>削除</UsedButton>
						}*/}
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