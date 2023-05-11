import React from "react";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
	onClick?: () => void;
}

export const PrimaryButton: React.FC<Props> = (props) => {
	const { children, onClick } = props;
	return (
			<SButton onClick={onClick ? onClick : () => {}}>
				{children}
			</SButton>
	)
}

const SButton = styled.button`
	background-color: #FF3737;
	color: #fff;
	border: none;
	border-radius: 3px;
	outline: none;
	font-size: 1rem;
	height: 40px;
	text-align: center;
	padding: 0 20px;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;