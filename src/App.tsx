import { createBrowserRouter, RouterProvider } from "react-router";

import SignIn from "./pages/SignIn";
import Age from "./pages/Age";
import FitTrack from "./pages/FitTrack";
import Body from "./pages/Body";
import Fit from "./pages/Fit";
import Dashboard from "./pages/Dashboard";
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
  {
    path: "/fit",
    Component: Fit,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
