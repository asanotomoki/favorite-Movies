import React from "react";
import styled from "styled-components";
import { MovieCard } from "./movieCard";
import { useTranding } from "../../hook/useTrandingMovies";
import { useMovieList } from "../../hook/useMovieList";
import { useNavigate } from "react-router-dom";
import { MovieType } from "../../type/api/Movie";
import { useMovieDetail } from "../../hook/useMovieDetail";

export const MovieCardList: React.FC = () => {
	const navigate = useNavigate();
	const { getTrandingMovies } = useTranding();

	React.useEffect(() => {
		getTrandingMovies();
	}, [getTrandingMovies]);
	const { MovieList } = useMovieList();
	const { setMovie } = useMovieDetail();
	const onClick = (movie: MovieType) => {
		setMovie(movie);
		navigate(`/movie/${movie.id}`);
	}
	return (
		<SContainer onClick={() => { }}>
			{MovieList ? MovieList.map((movie) => {
				return (
					<SCardContainer onClick={() => onClick(movie)} key={movie.id}>
						<MovieCard
							id={movie.id}
							title={movie.title}
							posterPath={movie.poster_path}
							releaseDate={movie.release_date}
						/>
					</SCardContainer>
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
	height: 500px;
	margin: 20px 0;
`;