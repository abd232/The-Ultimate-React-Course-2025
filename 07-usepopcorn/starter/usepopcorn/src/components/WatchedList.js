import WatchedElement from "./WatchedElement";

export default function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedElement movie={movie} />
      ))}
    </ul>
  );
}
