import { useFavoriteMovieList } from "./useFavoriteMovieList"
import { MovieType } from "../type/api/Movie"

export const useAddFavorite = () => {
	const { setFavoriteMovieList, FavoriteMovieList } = useFavoriteMovieList();
	const addFavorite = (movie: MovieType) => {
		if (!FavoriteMovieList) {
			setFavoriteMovieList([movie]);
		} else if (FavoriteMovieList.some((favoriteMovie) => favoriteMovie.id === movie.id)) {
			return ;
		} else {
			const newFavoriteMovieList = [...FavoriteMovieList, movie];
			setFavoriteMovieList(newFavoriteMovieList);
		}
	}
	return { addFavorite };
}
