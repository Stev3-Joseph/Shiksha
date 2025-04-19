import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RegButton from "./buttons/RegButton";
import LoginButton from "./buttons/LoginButton";
import LogoutButton from "./buttons/LogoutButton";
import Logo from "./Logo";
import checkSession from "../util/session";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function sessionCheck() {
    let session = await checkSession();
    setLoggedIn(session);
  }

  useEffect(() => {
    sessionCheck();
  }, []);

  return (
    <header className="header-animation bg-white/90 backdrop-blur-sm z-10 fixed text-black md:px-20 px-4 py-3 w-full flex justify-between items-center h-20 border-b-1 border-gray-200">
      <Logo />

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`md:flex text-xl absolute md:static top-20 left-0 w-full bg-white md:bg-transparent md:w-fit justify-center items-center flex-col md:flex-row shadow-lg md:shadow-none shadow-gray-500 ${
          menuOpen ? "flex gap-2 p-4" : "hidden"
        }`}
      >
        <Link to="/" className="p-2 m-2 rounded-sm hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" className="p-2 m-2 rounded-sm hover:text-blue-500">
          About
        </Link>
        <Link to="/contact" className="p-2 m-2 rounded-sm hover:text-blue-500">
          Contact Us
        </Link>
        {!loggedIn ? (
          <div className="flex gap-4 justify-center items-center">
            <RegButton priText={`Register`} />
            <LoginButton />
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <Link
              to="/test"
              className="bg-green-500 hover:bg-green-700 hover:scale-102 delay-75 text-lg font-semibold text-white p-6 pt-3 pb-3 rounded-md h-fit w-fit"
            >
              Start Test
            </Link>
            <LogoutButton />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
