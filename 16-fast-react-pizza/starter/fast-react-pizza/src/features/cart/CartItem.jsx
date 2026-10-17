import { formatCurrency } from "../../helper/helpers";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between border-b border-stone-200 py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4">
        <p>{formatCurrency(totalPrice)}</p>
        <button className="text-sm font-bold text-yellow-500 border border-yellow-500 rounded-full py-1 px-3 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
