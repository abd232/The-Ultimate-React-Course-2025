import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch({ type: "cart/clearCart" });
  }

  return (
    <div className="w-full max-w-240 mx-auto p-8 ">
      <Link
        className="text-sm font-bold text-blue-300 hover:text-blue-400 mb-4 block"
        to="/menu"
      >
        &larr; Back to menu
      </Link>

      {cart.length === 0 && <EmptyCart />}
      {cart.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Your cart, {userName}
          </h2>
          <div className="mb-4">
            <Link
              to="/order/new"
              className="text-sm font-bold text-blue-300 hover:text-blue-400"
            >
              Order pizzas
            </Link>
            {cart.map((item) => (
              <CartItem key={item.pizzaId} item={item} />
            ))}
            <button
              className="bg-red-500 hover:bg-red-400 text-stone-800 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
