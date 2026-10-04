import { createBrowserRouter, RouterProvider } from "react-router";

import SignIn from "./pages/SignIn";
import Age from "./pages/Age";
import FitTrack from "./pages/FitTrack";
import Body from "./pages/Body";
const router = createBrowserRouter([
  {
    path: "/",
    Component: SignIn,
  },
  {
    path: "/fittrack",
    Component: FitTrack,
  },
  {
    path: "/body",
    Component: Body,
  },
  {
    path: "/age",
    Component: Age,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
