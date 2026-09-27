import { createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home"

const router = createBrowserRouter({
  {
    path:"/",
    element:<Home/>,
  },
});

function App() {
  return <div>hello</div>;
}

export default App;
