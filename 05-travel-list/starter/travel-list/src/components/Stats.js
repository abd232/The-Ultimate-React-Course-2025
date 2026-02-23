export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numberOfItems = items.length;
  const numberOfPackedItems = items.filter((item) => item.packed).length;

  const percentage = Math.round(numberOfPackedItems / numberOfItems, 2) * 100;
  if (percentage === 0)
    return (
      <footer className="stats">
        Please Start Packing items to you bags 💼.
      </footer>
    );

  if (percentage === 100)
    return (
      <footer className="stats">
        You packed all your items and you are ready for you trip ✈️.
      </footer>
    );

  return (
    <footer className="stats">
      You have {numberOfItems} items ready to be packed 💼 , you packed{" "}
      {numberOfPackedItems} items ({percentage}%)
    </footer>
  );
}
