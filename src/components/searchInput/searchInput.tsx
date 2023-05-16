import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../shared/Button/PrimaryButton";
import { PrimaryInput } from "../shared/Input/PrimaryInput";
import { useSearchMovies } from "../../hook/useSearchMovies";
import { useNavigate } from "react-router-dom";

export const SearchInput: React.FC = () => {
	const [searchText, setSearchText] = React.useState("");
	const { getSearchMovies } = useSearchMovies();
	const navigate = useNavigate();
	const search = () => {
		getSearchMovies(searchText);
		navigate(`/search/${searchText}`);
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	}
	return (
		<SContainer>
			<PrimaryInput placeholder="検索" onChange={onChange}/>
			<SBox><PrimaryButton onClick={search}>検索</PrimaryButton></SBox>
		</SContainer>
	)
}

const SContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;

const SBox = styled.div`
	padding: 0 10px;
`;