import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header: React.FC = () => {
	return (
		<SHeader>
			<Link to="/">
				<h1>Movie App</h1>
			</Link>
			<Link to="/favorite">
				<p>お気に入り</p>
			</Link>

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
