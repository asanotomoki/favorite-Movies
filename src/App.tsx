import { Router } from "./Router/Router";
import { MovieListProvider } from "./provider/MovieList";
import { MovieProvider } from "./provider/DetailMovie";
import { FavoriteMovieListProvider } from "./provider/FavoriteMovieList";
function App() {
  return (
    <MovieListProvider>
      <MovieProvider>
        <FavoriteMovieListProvider>
          <Router />
        </FavoriteMovieListProvider>
      </MovieProvider>
    </MovieListProvider>
  );
}

export default App;
