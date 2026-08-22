import { useState } from "react";

export default function ItemsList({ items, onToggleItem, onDeleteItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  } else if (sortBy === "description") {
    sortedItems.sort((a, b) => a.item.localeCompare(b.item));
  }

  function handlePackingItem(itemId) {
    onToggleItem(itemId);
  }

  function handleDeleteItem(itemId) {
    onDeleteItem(itemId);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handlePackingItem(item.id)}
            />

            <span>{item.item}</span>

            <button onClick={() => handleDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="description">Sort by Description</option>
        </select>

        <button>Clear List</button>
      </div>
    </div>
  );
}
