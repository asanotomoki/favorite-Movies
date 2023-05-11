import React from "react";
import { BasicTemplate } from "../template/BasicTemplate";
import { MovieCardList } from "../components/movieCard/movieCardList/movieCardList";

export const MovieDetail: React.FC = () => {
	return (
		<>
			<BasicTemplate>
				<h1>Movie Detail</h1>
				<MovieCardList/>
			</BasicTemplate>
		</>
	)
}