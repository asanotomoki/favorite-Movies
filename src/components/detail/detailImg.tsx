import React from "react";
import styled from "styled-components";

type Props = {
	path: string;
}

export const DetailImg: React.FC<Props> = (props) => {
	const { path } = props;
	const imgUrl = `https://image.tmdb.org/t/p/w500${path}`;
	return (
		<SImg src={imgUrl} />
	)
}

const SImg = styled.img`
	width: 40%;
	max-width: 400px;
	height: 100%;
`