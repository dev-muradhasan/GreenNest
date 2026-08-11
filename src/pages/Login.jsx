import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        toast.success('sign in successful')
        console.log(res.user)
      })
      .catch(err=>{
        console.log(err.message)
      });
  };

  return (
    <div className="bg-[#eef8ed] flex items-center justify-center py-12">
      <form
        onSubmit={handleSignIn}
        className="w-full max-w-md bg-white rounded-xl shadow-sm p-8"
      >
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-5 pb-5 border-b border-gray-200">
          Login to GreenNest
        </h2>

        {/* <div className="bg-red-100 flex items-center gap-1 text-red-500 text-xs rounded-md px-2 py-2 mb-3">
          <FiAlertTriangle /> <span>Invalid email or password</span>
        </div> */}

        <div className="mb-3">
          <label className="block font-medium text-gray-700 mb-2">Email</label>

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full pr-8"
            />

            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
            >
              {show ? <FaEyeSlash size={16} /> : <FaEye size={16}></FaEye>}
            </span>
          </div>
        </div>

        <div className="text-right mt-2">
          <button className="text-xs text-[#267442] hover:underline">
            Forgot Password?
          </button>
        </div>

        <button className="btn w-full bg-[#267442] hover:bg-[#1e6035] text-white mt-2">
          Login
        </button>

        <div className="flex items-center gap-2 my-3">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-gray-400">or</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Google */}
        <button className="btn w-full text-md bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link
            to={"/auth/register"}
            className="text-[#267442] font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
