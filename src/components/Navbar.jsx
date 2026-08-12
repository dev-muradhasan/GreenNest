import { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import MyContainer from "./MyContainer";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { IoTriangle } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { toast } from "react-toastify";
import userImg from '../assets/images.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser ,loading} = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.warn('user logout');
        navigate('/auth/login')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-green-700" : "text-gray-700"}`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/plants"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-green-700" : "text-gray-700"}`
          }
        >
          Plants
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/profile"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-green-700" : "text-gray-700"}`
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <MyContainer className="relative">
        <div className="navbar min-h-20 px-0">
          <div className="navbar-start">
            <Link
              to="/"
              className="flex items-center text-2xl sm:text-3xl font-bold text-green-800"
            >
              <img className="w-14" src={logo} alt="Logo" />
              <span>GreenNest</span>
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-6 px-1">{navLinks}</ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-bottom navbar-end hidden md:flex gap-3">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-4 cursor-pointer"
              >
                <img
                  src={user?.photoURL || userImg}
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <div className="flex items-center gap-2 text-lg font-medium text-gray-800">
                    {user?.displayName || "Jane Doe"}
                    <span className="rotate-180">
                      <IoTriangle size={15} />
                    </span>
                  </div>

                  <p className="text-gray-500">Logout</p>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-50 w-40 p-2 shadow-lg mt-2"
              >
                <li className="font-medium text-red-500 text-lg">
                  <button onClick={handleLogout}>
                    <MdLogout size={20} />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-end hidden md:flex gap-3">
              <Link
                to="/auth/login"
                className="btn btn-outline border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white px-7"
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                className="btn bg-green-800 border-green-800 text-white hover:bg-green-900 hover:border-green-900 px-7"
              >
                Register
              </Link>
            </div>
          )}

          <div className="navbar-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle text-green-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 px-4 pb-4">
            <ul className="menu bg-base-100 rounded-box shadow-md w-full border border-gray-100 p-3">
              {navLinks}
              <div className="divider my-1"></div>
              {user ? (
                <div className="dropdown dropdown-bottom navbar-end flex gap-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <img
                      src={user?.photoURL || userImg}
                      alt="User"
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex items-center gap-2 text-lg font-medium text-gray-800">
                        {user?.displayName || "Jane Doe"}
                        <span className="rotate-180">
                          <IoTriangle size={15} />
                        </span>
                      </div>

                      <p className="text-gray-500">Logout</p>
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-50 w-40 p-2 shadow-lg mt-2"
                  >
                    <li className="font-medium text-red-500 text-lg">
                      <button onClick={handleLogout}>
                        <MdLogout size={20} />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  {" "}
                  <li>
                    <Link
                      to="/auth/login"
                      onClick={() => setIsOpen(false)}
                      className="font-medium text-green-800"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/auth/register"
                      onClick={() => setIsOpen(false)}
                      className="font-medium text-white bg-green-800 hover:bg-green-900"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </MyContainer>
    </header>
  );
};

export default Navbar;
