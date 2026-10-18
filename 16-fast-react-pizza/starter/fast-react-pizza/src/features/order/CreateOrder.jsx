import { useSelector } from "react-redux";
import { Form, useActionData, useNavigation } from "react-router-dom";

// https://uibakery.io/regex-library/phone-number

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const userName = useSelector((state) => state.user.name);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const errorFrom = useActionData();

  return (
    <div className="w-full max-w-240 mx-auto p-8 ">
      <h2 className="text-xl font-semibold text-stone-800 mb-8">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="flex flex-col gap-4">
        <div className="mb-4 flex flex-col gap-2">
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={userName || errorFrom?.customer}
            className="border border-stone-300 w-full bg-slate-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <label>Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="border border-stone-300 w-full bg-slate-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errorFrom?.phone && <p>{errorFrom.phone}</p>}
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="border border-stone-300 w-full bg-slate-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="mr-2 accent-yellow-500 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-xl md:text-2xl lg:text-3xl"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 text-stone-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
