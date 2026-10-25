import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { formatCurrency } from "../../helper/helpers";
import { fetchAddress } from "../home/userSlice";

// https://uibakery.io/regex-library/phone-number

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const userName = useSelector((state) => state.user.name);

  const address = useSelector((state) => state.user.address);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const position = useSelector((state) => state.user.position);

  const postionUsed = useSelector((state) => state.user.postionUsed);

  const isLoadingAddress = status === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const errorFrom = useActionData();

  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;

  const dispatch = useDispatch();

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
          <div className="relative">
            <input
              type="text"
              name="address"
              required
              defaultValue={address}
              className="border border-stone-300 w-full bg-slate-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {!postionUsed && (
              <button
                className="absolute bg-yellow-400 rounded-full border-stone-300 border py-2 px-4 right-[1px]
            hover:pointer hover:stroke-white"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Postion
              </button>
            )}
          </div>
          {error !== "" && (
            <p className="bg-red-300 px-4 py-1 rounded-full ">{error}</p>
          )}
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={`${position.latitude},${position.longitude}`}
          />
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="mr-2 accent-yellow-500 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-xl md:text-2xl lg:text-3xl"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 text-stone-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting || isLoadingAddress}
          >
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice + priorityPrice)}`}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
