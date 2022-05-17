import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem }) => {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  return (
    <div class="header2">
      <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
      </div>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </div>
  );
};

export default Header;
