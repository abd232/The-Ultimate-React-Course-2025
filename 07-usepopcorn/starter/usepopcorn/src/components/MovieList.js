import MovieElement from "./MovieElement";

export default function MovieList({
  movies,
  isLoading,
  error,
  selectedId,
  setSelectedId,
}) {
  return (
    <ul className="list list-movies">
      {isLoading && <p className="loader">Loading...</p>}
      {!isLoading && !error && movies?.length === 0 && (
        <p className="loader">No movies found for this search.</p>
      )}
      {error && <p className="loader">{error}</p>}
      {movies?.map((movie) => (
        <MovieElement
          movie={movie}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </ul>
  );
}
