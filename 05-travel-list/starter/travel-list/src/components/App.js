import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";
import "../index.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddingItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeletingItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all the items in the packing list?",
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddingItem={handleAddingItem} />
      <List
        items={items}
        onDeletingItems={handleDeletingItems}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
