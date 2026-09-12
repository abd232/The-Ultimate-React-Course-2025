import { useEffect } from "react";
import StarsRating from "./StarsRating";

function MovieDetails({
  selectedMovie,
  isLoadingDetails,
  errorDetails,
  userRating,
  setUserRating,
  onCloseMovie,
  onAddWatched,
  watched,
  onDeleteWatched,
}) {
  const isWatched = watched.some(
    (movie) => movie.imdbID === selectedMovie.imdbID,
  );
  const maxRating = 10;
  useEffect(
    function () {
      const handleKeyDown = (event) => {
        if (event.code === "Escape") {
          setUserRating(0);
          onCloseMovie();
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [setUserRating, onCloseMovie],
  );

  return (
    <div className="details">
      {isLoadingDetails ? (
        <div>Loading details...</div>
      ) : errorDetails ? (
        <div>{errorDetails}</div>
      ) : (
        <>
          <header>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <section>
              <h2>{selectedMovie.Title}</h2>
              <p>
                Year: {selectedMovie.Released} - {selectedMovie.Runtime}
              </p>
              <p>Genre: {selectedMovie.Genre}</p>
              <p>⭐ {selectedMovie.imdbRating}</p>
            </section>
          </header>

          <div className="rating">
            {isWatched ? (
              <p style={{ textAlign: "center" }}>
                You rated this movie{" "}
                {
                  watched.find((movie) => movie.imdbID === selectedMovie.imdbID)
                    .userRating
                }{" "}
                ⭐
              </p>
            ) : (
              <>
                <StarsRating
                  maxRating={maxRating}
                  size={24}
                  rating={userRating}
                  setRating={setUserRating}
                />
                {userRating > 0 && (
                  <button
                    className="btn-add"
                    onClick={() => {
                      onAddWatched({
                        ...selectedMovie,
                        userRating,
                      });
                      setUserRating(0);
                      onCloseMovie();
                    }}
                  >
                    Add to watched
                  </button>
                )}
              </>
            )}
          </div>
          <div className="details-overview">
            <p>{selectedMovie.Plot}</p>
            <p>Director: {selectedMovie.Director}</p>
            <p>Actors: {selectedMovie.Actors}</p>
            <p>Language: {selectedMovie.Language}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
