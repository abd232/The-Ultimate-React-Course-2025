import { useState } from "react";
export default function Form({ onAddingItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddingItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        name="quantity"
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="form-select"
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="description"
        value={description}
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      />
      <button className="form-btn">Add</button>
    </form>
  );
}
