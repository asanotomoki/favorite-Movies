import React from "react";
import { BasicTemplate } from "../template/BasicTemplate";
import { MovieCardList } from "../components/movieCard/movieCardList/movieCardList";
import { SearchInput } from "../components/searchInput/searchInput";

export const Home: React.FC = () => {
	return (
		<>
			<BasicTemplate>
				<SearchInput />
				<MovieCardList/>
			</BasicTemplate>
		</>
	)
}

