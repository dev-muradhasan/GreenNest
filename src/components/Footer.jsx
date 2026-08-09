import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import MyContainer from "./MyContainer";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b351d] text-white">
      <MyContainer className="py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center text-2xl font-bold">
              <img className="w-14" src={logo} alt="Logo" />
              <span>GreenNest</span>
            </Link>

            <p className="mt-3 text-sm text-gray-200">
              Bringing nature closer to you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/about" className="hover:text-lime-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-lime-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-lime-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>

            <div className="flex items-center gap-5 text-sm text-gray-200">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-lime-400 transition"
              >
                <FaInstagram size={18} />
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-lime-400 transition"
              >
                <FaFacebookF size={18} />
                Facebook
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-lime-400 transition"
              >
                <FaPinterestP size={18} />
                Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <p className="text-sm text-center text-gray-200">
            © 2025 GreenNest. All rights reserved.
          </p>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
