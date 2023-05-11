import React from "react";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
}

export const PraimaryTitle: React.FC<Props> = (props) => {
	const { children } = props;

	return (
		<STitle>{children}</STitle>
	)
}

const STitle = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	color: #000;
	margin: 0;
`;
