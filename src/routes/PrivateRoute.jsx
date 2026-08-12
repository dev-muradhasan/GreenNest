import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { RingLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[38vh]">
        <RingLoader color="#267442" />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
