import { createBrowserRouter, RouterProvider } from "react-router";
import SignIn from "./Pages/SignIn";
import FitTrack from "./Pages/FitTrack";
import Body from "./Pages/Body";
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
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
