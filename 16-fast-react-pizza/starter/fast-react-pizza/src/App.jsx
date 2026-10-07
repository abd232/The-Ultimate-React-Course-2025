import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import { loader as menuLoader } from "./features/menu/MenuLouder";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./UI/AppLayout";
import createOrderAction from "./features/order/createOrderAction";
import OrderLoader from "./features/order/OrderLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
