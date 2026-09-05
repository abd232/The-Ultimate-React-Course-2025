import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import Logo from "./components/Logo";
import MovieDetails from "./components/MovieDetails";

const Key = "1560c864";

function useSelectMovie(selectedId, setSelectedId) {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { Title: title } = selectedMovie;
  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        setError("");
        console.log(selectedId);
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${Key}&i=${selectedId}`,
          );
          if (await !res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error(data.Error);
          setSelectedMovie(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            setSelectedMovie({});
            setError("❌" + err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [selectedId],
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
        // console.log(`Clean up effect for movie ${title}`);
      };
    },
    [title],
  );

  return {
    selectedMovie,
    isLoading: isLoading,
    error: error,
    setSelectedId,
  };
}

function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();

    async function fetchMovies() {
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${Key}&s=${query}`,
          { signal: controller.signal },
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setMovies([]);
          setError("❌" + err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();

    return () => controller.abort();
  }, [query]);
  return { movies, isLoading, error };
}

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);
  const [userRating, setUserRating] = useState(null);
  const [watched, setWatched] = useLocalStorageState("watched", []);
  const [selectedId, setSelectedId] = useState(null);
  const {
    selectedMovie,
    isLoading: isLoadingDetails,
    error: errorDetails,
  } = useSelectMovie(selectedId, setSelectedId);

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(
    watched.map((movie) => movie.Runtime.split(" ").at(0)),
  );

  return (
    <>
      <NavBar
        searchQuery={query}
        setSearchQuery={setQuery}
        searchResultCount={movies.length}
      >
        <Logo />
      </NavBar>

      <main className="main">
        <Box>
          <MovieList
            movies={movies}
            isLoading={isLoading}
            error={error}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedMovie={selectedMovie}
              userRating={userRating}
              setUserRating={setUserRating}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
              isLoadingDetails={isLoadingDetails}
              errorDetails={errorDetails}
            />
          ) : (
            <>
              <WatchedSummary
                watched={watched}
                avgImdbRating={avgImdbRating}
                avgUserRating={avgUserRating}
                avgRuntime={avgRuntime}
              />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </main>
    </>
  );
}

export default App;
