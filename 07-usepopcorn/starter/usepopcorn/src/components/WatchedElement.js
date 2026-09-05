export default function WatchedElement({ movie, onDeleteWatched }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime.split(" ").at(0)} min</span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDeleteWatched(movie.imdbID)}
      >
        ❌
      </button>
    </li>
  );
}
