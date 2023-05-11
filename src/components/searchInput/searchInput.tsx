import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../shared/Button/PrimaryButton";
import { PrimaryInput } from "../shared/Input/PrimaryInput";
export const SearchInput: React.FC = () => {
	return (
		<Scontainer>
			<PrimaryInput placeholder="検索"/>
			<SBox><PrimaryButton>検索</PrimaryButton></SBox>
		</Scontainer>
	)
}

const Scontainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;

const SBox = styled.div`
	padding: 0 10px;
`;