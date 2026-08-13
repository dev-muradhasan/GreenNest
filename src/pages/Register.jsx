import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const [passwordErr , setPasswordErr] = useState('')
  const {
    setUser,
    createUser,
    updateUserProfile,
    sendVerificationEmail,
    setLoading,
    signOutUser,
    googleSignIn,
  } = use(AuthContext);
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (!passwordRegex.test(password)) {
      setPasswordErr(
        "Password must be at least 6 characters with uppercase and lowercase letters.",
      );
      return;
    }
    setPasswordErr('')

    createUser(email, password)
      .then(() => {
        updateUserProfile(displayName, photoURL)
          .then(() => {
            sendVerificationEmail()
              .then(() => {
                setLoading(false);
                signOutUser()
                  .then(() => {
                    toast.success("please check email");
                    setUser(null);
                  })
                  .catch((err) => toast.error(err.message));
                navigate("/auth/login");
              })
              .catch((err) => {
                toast.error(err.message);
              });
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Please enter a valid email.");
        } else if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters long.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Please check your internet connection.");
        } else if (error.code === "auth/popup-closed-by-user") {
          toast.error("Google sign-in popup was closed.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else {
          toast.error(error.message);
        }
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("sign in successful");
        navigate(location.state || "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="bg-[#eef8ed] flex items-center justify-center py-12">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white rounded-xl shadow-sm p-8"
      >
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-5 pb-5 border-b border-gray-200">
          Create Your Account
        </h2>

        <div className="mb-3">
          <label className="block font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-3">
          <label className="block font-medium text-gray-700 mb-2">
            Photo URl
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your Photo URl"
            className="input input-bordered w-full"
          />
        </div>

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
              name="password"
              type={show ? "text" : "password"}
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

        {passwordErr && (
          <div className="text-sm text-red-500 mt-2 flex gap-1">
           <FiAlertTriangle size={18}></FiAlertTriangle> Password must be 6+ characters with an uppercase and lowercase
            letter
          </div>
        )}

        <button
          type="submit"
          className="btn w-full bg-[#267442] hover:bg-[#1e6035] text-white mt-7"
        >
          Register
        </button>

        <div className="flex items-center gap-2 my-3">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-gray-400">or</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn w-full text-md bg-white text-black border-[#e5e5e5]"
        >
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
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-[#267442] font-semibold cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
