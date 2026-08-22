import { useState } from "react";

export default function Item({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <h1 className={`number`}>{index + 1}</h1>
      <h1 className={`title`}>{faq.title}</h1>
      <p className="icon">{open ? "-" : "+"}</p>
      {open && <p className="content-box">{faq.text}</p>}
    </div>
  );
}
