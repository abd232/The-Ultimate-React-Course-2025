import MovieElement from "./MovieElement";

export default function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieElement movie={movie} />
      ))}
    </ul>
  );
}
