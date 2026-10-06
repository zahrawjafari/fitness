
import { createBrowserRouter, RouterProvider } from "react-router";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Age from "./pages/Age";
import Body from "./pages/Body";
import Fit from "./pages/Fit";
import Dashboard from "./pages/Dashboard";
import FitTrack from "./pages/FitTrack";
import Home from "./components/Home";
function SimplePage({
  title,
}: {
  title: string;
}) {
  return (
    <main className="min-h-screen bg-[#F7F8F5] px-8 py-10 md:ml-[250px]">
      <h1 className="text-3xl font-extrabold text-[#172018]">
        {title}
      </h1>
      <p className="mt-2 text-sm text-[#8A918C]">
        This page is ready to build.
      </p>
    </main>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    Component: Signup,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/age",
    Component: Age,
  },
  {
    path: "/body",
    Component: Body,
  },
  {
    path: "/fit",
    Component: Fit,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/fittrack",
    Component: FitTrack,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/food",
    Component: () => <SimplePage title="Food" />,
  },
  {
    path: "/activity",
    Component: () => <SimplePage title="Activity" />,
  },
  {
    path: "/profile",
    Component: () => <SimplePage title="Profile" />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;