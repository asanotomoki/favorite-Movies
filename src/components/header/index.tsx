import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
	return (
		<SHeader>
			<h1>Movie App</h1>
		</SHeader>
	)
}

const SHeader = styled.header`
	background-color: #000;
	color: #fff;
	padding: 8px 0;
	top: 0;
	width: 100%;
	z-index: 100;
	h1 {
		text-align: center;
	}
`;
