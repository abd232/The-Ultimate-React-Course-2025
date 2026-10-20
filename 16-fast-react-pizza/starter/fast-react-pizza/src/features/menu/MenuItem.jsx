import { useDispatch } from "react-redux";
import { formatCurrency } from "../../helper/helpers";
import { addToCart } from "../cart/cartSlice";

function MenuItem({ pizza, quantity }) {
  const {
    id: pizzaId,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart() {
    console.log("Adding to cart:", pizzaId, name, unitPrice);
    dispatch(addToCart({ pizzaId, name, unitPrice }));
  }

  function handleRemoveFromCart() {
    console.log("Removing from cart:", pizzaId, name);
    dispatch({ type: "cart/deleteFromCart", payload: pizzaId });
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
        <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-between h-full">
          {quantity > 0 && (
            <div className="flex items-center justify-between space-x-2 mb-2">
              <button
                onClick={() =>
                  dispatch({ type: "cart/increaseQuantity", payload: pizzaId })
                }
                className="text-md font-semibold text-yellow-500 border border-yellow-500 rounded-full py-[1px] px-[8px] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                +
              </button>
              <p className="text-stone-700">{quantity}</p>
              <button
                onClick={() =>
                  dispatch({ type: "cart/decreaseQuantity", payload: pizzaId })
                }
                className="text-lg font-semibold text-yellow-500 border border-yellow-500 rounded-full py-[-1px] px-[8px] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                -
              </button>
            </div>
          )}
          {quantity === 0 && (
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 self-center text-white py-2 px-8 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 mt-auto disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add
            </button>
          )}
          {quantity > 0 && (
            <button
              onClick={handleRemoveFromCart}
              className="bg-yellow-400 self-center text-white py-2 px-5 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 mt-auto disabled:cursor-not-allowed disabled:opacity-50"
            >
              remove
            </button>
          )}
        </div>
      )}
    </li>
  );
}

export default MenuItem;
