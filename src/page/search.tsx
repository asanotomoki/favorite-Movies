import React from 'react';
import { BasicTemplate } from '../template/BasicTemplate';
import { MovieCardList } from '../components/movieCard/movieCardList';
import { SearchInput } from '../components/searchInput/searchInput';

export const Search = () => {
	return (
		<>
			<BasicTemplate>
				<SearchInput />
				<MovieCardList />
			</BasicTemplate>
		</>
	)	
}