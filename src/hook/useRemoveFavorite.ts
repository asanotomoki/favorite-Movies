import { useFavoriteMovieList } from "./useFavoriteMovieList"
import { MovieType } from "../type/api/Movie"

export const useRemoveFavorite = () => {
	const { setFavoriteMovieList, FavoriteMovieList } = useFavoriteMovieList();
	const RemoveFavorite = (movie: MovieType) => {
		if (!FavoriteMovieList) {
			return ;
		} else {
			const newFavoriteMovieList = FavoriteMovieList.filter((favoriteMovie) => favoriteMovie.id !== movie.id);
			setFavoriteMovieList(newFavoriteMovieList);
		}
	}
	return { RemoveFavorite };
}
