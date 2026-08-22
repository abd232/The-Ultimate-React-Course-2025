export default function Item({
  index,
  title,
  isActive,
  onSetActiveIndex,
  children,
}) {
  return (
    <div
      className={`item ${isActive ? "open" : ""}`}
      onClick={() => onSetActiveIndex(index)}
    >
      <h1 className={`number`}>{index + 1}</h1>
      <h1 className={`title`}>{title}</h1>
      <p className="icon">{isActive ? "-" : "+"}</p>
      {isActive && <p className="content-box">{children}</p>}
    </div>
  );
}
