import React from "react";
import { BasicTemplate } from "../template/BasicTemplate";
import { MovieCardList } from "../components/movieCard/movieCardList";
import { SearchInput } from "../components/searchInput/searchInput";
import { useTranding } from "../hook/useTrandingMovies";
export const Home: React.FC = () => {
	const { getTrandingMovies } = useTranding();
	React.useEffect(() => {
		getTrandingMovies();
	}, [getTrandingMovies]);
	return (
		<>
			<BasicTemplate>
				<SearchInput />
				<MovieCardList/>
			</BasicTemplate>
		</>
	)
}

