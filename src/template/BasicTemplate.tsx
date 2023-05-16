import React from "react";
import { Header } from "../components/header";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
}

export const BasicTemplate: React.FC<Props> = (props) => {
	return (
		<>
			<Header />
			<SContainer>
			{props.children}
			</SContainer>
		</>
	)
}

const SContainer = styled.div`
	width: 80%;
	padding: 16px;
	margin: 0 auto;
`;
