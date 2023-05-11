import React from "react";
import styled from "styled-components";
import { PrimaryText } from "../shared/Text/Text/PrimaryText";
import { PraimaryTitle } from "../shared/Text/Title/PrimaryTitle";
import { MovieImage } from "./movieImage";


export const MovieCard: React.FC = () => {
	const imgUrl = 'https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg'
	return (
		<SContainer>
			<MovieImage imgUrl={imgUrl}/>
			<PraimaryTitle>Tom&Jerry</PraimaryTitle>
			<PrimaryText>2002年</PrimaryText>
		</SContainer>
	)
}
const SContainer = styled.div`
	color: #000;
	top: 0;
	width: 30%;
	max-width: 200px;
	height: 100%;
	z-index: 100;
	margin: 8px 4px;
`;