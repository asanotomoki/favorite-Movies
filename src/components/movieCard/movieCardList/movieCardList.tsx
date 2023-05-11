import React from "react";
import styled from "styled-components";
import { MovieCard } from "../movieCard";


export const MovieCardList: React.FC = () => {
	return (
		<SContainer>
			{/* 配列を受け取りmapで回す */}
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
			<MovieCard/>
		</SContainer>
	)
}

const SContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;