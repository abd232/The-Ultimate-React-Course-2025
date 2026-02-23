import { useState } from "react";
export default function List({
  items,
  onDeletingItems,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li style={item.packed ? { textDecoration: "line-through" } : {}}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => onToggleItems(item.id)}
            />
            <span>
              {item.description} - {item.quantity}
            </span>
            <button onClick={() => onDeletingItems(item.id)}>❌</button>
          </li>
        ))}
      </ul>{" "}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
