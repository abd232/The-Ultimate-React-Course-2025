import WatchedElement from "./WatchedElement";

export default function WatchedList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedElement movie={movie} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
