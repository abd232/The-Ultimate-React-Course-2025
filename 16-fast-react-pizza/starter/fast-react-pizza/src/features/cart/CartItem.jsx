import { useDispatch } from "react-redux";
import { formatCurrency } from "../../helper/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    console.log("Removing from cart:", pizzaId, name);
    dispatch({ type: "cart/deleteFromCart", payload: pizzaId });
  }

  return (
    <li className="flex items-center justify-between border-b border-stone-200 py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() =>
              dispatch({ type: "cart/increaseQuantity", payload: pizzaId })
            }
            className="text-md font-semibold text-yellow-500 border border-yellow-500 rounded-full py-[1px] px-[8px] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: "cart/decreaseQuantity", payload: pizzaId })
            }
            className="text-lg font-semibold text-yellow-500 border border-yellow-500 rounded-full py-[-1px] px-[8px] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            -
          </button>
        </div>
        <button
          onClick={handleRemoveFromCart}
          className="text-sm font-bold text-yellow-500 border border-yellow-500 rounded-full py-1 px-3 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
