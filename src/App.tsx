import { Router } from "./Router/Router";
import { MovieListProvider } from "./provider/MovieList";
import { MovieProvider } from "./provider/DetailMovie";
function App() {
  return (
    <MovieListProvider>
      <MovieProvider>
        <Router />
      </MovieProvider>
    </MovieListProvider>
  );
}

export default App;
