import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import PlantsDetails from "../pages/PlantsDetails";
import Plants from "../pages/Plants";
import { RingLoader } from "react-spinners";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/plants",
        element: (
          <PrivateRoute>
            <Plants></Plants>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/plantsDetails/:id",
    loader: () => fetch("/plantsData.json"),
    hydrateFallbackElement: (
      <div className="flex justify-center items-center min-h-[38vh]">
        <RingLoader color="#267442" />
      </div>
    ),
    element: (
      <PrivateRoute>
        <PlantsDetails></PlantsDetails>
      </PrivateRoute>
    ),
  },
]);



export default router