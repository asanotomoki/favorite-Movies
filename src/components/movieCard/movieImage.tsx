import React from "react";
import styled from "styled-components";

type Props = {
	imgUrl: string;
}

export const MovieImage: React.FC<Props> = ({ imgUrl }) => {
	return (
		<SContainer>
			<SImg src={imgUrl} alt="" />
		</SContainer>
	)
}

const SContainer = styled.div`
	width: 100%;
	height: 100%;
	max-width: 300px;
	border-radius: 10px;
	overflow: hidden;
`;

const SImg = styled.img`
	width: 100%;
    max-width: 300px;
    height: 100%;
    transition: .3s; 
    cursor: pointer;
	border-radius: 10px;
	&:hover {
		transform:scale(1.5,1.5);
		transition:.8s all;
	}
`;