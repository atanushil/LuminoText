import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate logged-in state

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <nav className="flex flex-col sm:flex-row max-w-full bg-[#334155] px-4 py-4 text-[#e2e8f0] justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl sm:text-3xl flex items-center sm:px-2 font-semibold">
              <img src="../favicon.png" className="h-8" alt="" />
              {props.title}
            </Link>
            <Link to={"/"} className="text-xl sm:text-2xl font-medium">Home</Link>
            <Link to="/about" className="sm:mt-1">{props.about}</Link>
          </div>
          <div className="flex gap-2 sm:gap-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="text-base sm:text-xl my-2 sm:my-0 text-[#71717a] font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </Link>
                <button
                  onClick={handleLogout}
                  className="border-2 p-1 px-2 rounded-md text-sm border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white hover:font-medium"
                >
                  <Link to={"/"}>Log out</Link>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)} // Simulate login
                className="border-2 p-1 px-2 rounded-md text-sm border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white hover:font-medium"
              >
                <Link to="/login">Log in</Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "Title ",
  about: "About",
};
