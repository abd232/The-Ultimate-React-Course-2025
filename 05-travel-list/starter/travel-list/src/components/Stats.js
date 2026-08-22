export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <div className="stats">
      {totalItems === 0 ? (
        <em>Start adding some items to your packing list 📝</em>
      ) : (
        <>
          <p>
            <span>💼 {totalItems}</span> items on list
          </p>
          <p>
            <span>✅ {packedItems}</span> packed ({percentage}%)
          </p>
        </>
      )}
    </div>
  );
}
