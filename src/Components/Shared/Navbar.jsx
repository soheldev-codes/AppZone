import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, Navigate, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span className={isActive ? "gradient-text" : ""}>Home</span>
        )}
      </NavLink>
      <NavLink to="/apps">
        {({ isActive }) => (
          <span className={isActive ? "gradient-text" : ""}>Apps</span>
        )}
      </NavLink>
      <NavLink to="/installation">
        {({ isActive }) => (
          <span className={isActive ? "gradient-text" : ""}>Installation</span>
        )}
      </NavLink>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 ">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-4 "
            >
              {links}
            </ul>
          </div>
          <Link className="  font-bold text-lg" to="/dashboard">
            APP<span className="gradient-text">ZONE</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/soheldev-codes/AppZone"
            target="_blank"
            className="gradient-btn px-4 py-3 rounded font-semibold flex items-center gap-2 hover:opacity-90 transition-all"
          >
            <FaGithub />
            Contribute
          </a>
          ;
        </div>
      </div>
    </div>
  );
};

export default Navbar;
