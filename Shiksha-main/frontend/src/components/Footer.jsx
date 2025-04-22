import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 flex justify-center">
      <div className="text-white md:w-3/4 w-full  text-xl p-5 flex md:flex-row flex-col gap-3">
        <div className="md:w-1/2 w-full p-4 flex justify-evenly">
          <div className="w-fit flex flex-col gap-3">
            <h1>Quick Links</h1>
            <ul className="text-gray-400 w-full h-full gap-3 justify-center items-center">
              <li>
                <Link className="hover:text-gray-300" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="/about">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
          <div className="w-full p-5 flex items-center justify-center gap-4 text-4xl font-bold">
            <img src="./logo.png" className="h-12" alt="Logo" />
            <h1>shiksha</h1>
          </div>
          <div>
            <div className="flex flex-col items-center mt-3">
              <h1>Created by - </h1>
              <h2 className="text-2xl font-bold">Team Shiksha</h2>
            </div>
            <p>© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
