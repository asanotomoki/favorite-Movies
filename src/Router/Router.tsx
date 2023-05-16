import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from "../page/Home";
import { MovieDetail } from "../page/movieDetail";
import { Page404 } from "../page/page404";
import { Search } from "../page/search";

export const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search/*" element={<Search />} />
					<Route path="/movie/*" element={<MovieDetail />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}