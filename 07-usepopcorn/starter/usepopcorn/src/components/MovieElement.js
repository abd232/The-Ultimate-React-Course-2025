export default function MovieElement({ movie, selectedId, setSelectedId }) {
  return (
    <li
      key={movie.imdbID}
      onClick={() => setSelectedId(movie.imdbID)}
      className={selectedId === movie.imdbID ? "selected" : ""}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
