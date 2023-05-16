import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from "../page/Home";
import { MovieDetail } from "../page/movieDetail";
import { Page404 } from "../page/page404";
import { Search } from "../page/search";
import { Favorite } from "../page/Favorite";

export const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search/*" element={<Search />} />
					<Route path="/movie/*" element={<MovieDetail />} />
					<Route path="/favorite" element={<Favorite />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}