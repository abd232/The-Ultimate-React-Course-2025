import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="w-full max-w-240 mx-auto p-8">
      <Link
        className="text-sm font-bold text-blue-300 hover:text-blue-400"
        to="/menu"
      >
        &larr; Back to menu
      </Link>

      <h2 className="text-2xl font-bold text-stone-800 mb-4">
        Your cart, %NAME%
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
        <button className="bg-red-500 hover:bg-red-400 text-stone-800 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
