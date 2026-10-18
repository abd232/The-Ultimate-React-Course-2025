import { useDispatch } from "react-redux";
import { formatCurrency } from "../../helper/helpers";
import { addToCart } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { pizzaId, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart({ pizzaId, name, unitPrice }));
  }

  return (
    <li className="flex items-center justify-between space-x-4 border-b border-stone-200 p-4">
      <div className="flex items-center space-x-4">
        <img
          className={`h-24 w-24 object-cover ${soldOut ? "opacity-90 grayscale" : ""}`}
          src={imageUrl}
          alt={name}
        />
        <div className="flex flex-col h-full justify-between">
          <p className="font-medium">{name}</p>
          <p>{ingredients.join(", ")}</p>
          <div className="flex items-center mt-auto">
            {soldOut ? (
              <p className="text-stone-700 ">Sold out</p>
            ) : (
              <p className="mt-auto">{formatCurrency(unitPrice)}</p>
            )}
          </div>
        </div>
      </div>
      {!soldOut && (
        <button
          onClick={handleAddToCart}
          className="bg-yellow-400 self-center text-white py-2 px-4 sm:px-6 md:px-8 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 mt-auto disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add
        </button>
      )}
    </li>
  );
}

export default MenuItem;
