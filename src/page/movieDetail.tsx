import React from "react";
import { BasicTemplate } from "../template/BasicTemplate";
import { Detail } from "../components/detail";
import { useMovieDetail } from "../hook/useMovieDetail";
export const MovieDetail: React.FC = () => {
	const { Movie } = useMovieDetail();
	if (!Movie) return (<div>None</div>)
	return (
		<BasicTemplate>
			<Detail movie={Movie}/>
		</BasicTemplate>
	)
}