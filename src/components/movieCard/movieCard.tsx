import React, { memo } from "react";
import styled from "styled-components";
import { PrimaryText } from "../shared/Text/Text/PrimaryText";
import { PrimaryTitle } from "../shared/Text/Title/PrimaryTitle";
import { MovieImage } from "./movieImage";

type Props = {
	id: number;
	title: string;
	posterPath: string;
	releaseDate: string;
}

export const MovieCard: React.FC<Props> = memo((props) => {
	const { title, releaseDate, posterPath } = props;
	const imgUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
	return (
		<SContainer>
			<SImgContainer>
				<MovieImage imgUrl={imgUrl} />
			</SImgContainer>
			<STextContainer>
				<PrimaryTitle>{title}</PrimaryTitle>
				<PrimaryText>{releaseDate}</PrimaryText>
			</STextContainer>		
		</SContainer>
	)
});
const SContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 16px;

`;

const SImgContainer = styled.div`
	width: 100%;
	height: 70%;
	max-width: 300px;
	border-radius: 10px;
	overflow: hidden;
`;

const STextContainer = styled.div`
	width: 100%;
	height: 20%;
`;