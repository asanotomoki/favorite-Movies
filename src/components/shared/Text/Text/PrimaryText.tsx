import React from "react";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
}

export const PrimaryText: React.FC<Props> = (props) => {
	return (
		<SText>
			{props.children}
		</SText>
	)
}

const SText = styled.p`
	font-size: 1rem;
	color: #000;
	margin: 0;
`;

