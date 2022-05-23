import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex"></div>
          <div className="navlinks">
            <div className="navlink">
              <ul
                className={
                  MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
                }
                onClick={() => setMobileMenu(false)}
              >
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/About us">About us</Link>
                </li>
                <li>
                  <Link to="/Contact">contact</Link>
                </li>
              </ul>
              <button
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className="fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
