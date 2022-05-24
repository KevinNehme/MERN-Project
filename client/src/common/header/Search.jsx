import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../components/firebase";

const Search = ({ CartItem }) => {
  console.log(auth.currentUser);
  // if(auth.currentUser===null){
  //   alert('noo')
  // }else{
  // alert('yes')
  // }
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  function signout() {
    console.log(auth.currentUser); // This returns null
    auth.signOut();
  }

  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log("signed in");
      document.getElementById("btnSignOut").style.visibility = "visible";
      document.getElementById("btnShoppingBag").style.visibility = "visible";
      document.getElementById("iconSignUp").style.visibility = "hidden";
      document.getElementById("btnShoppingcart").style.visibility = "visible";
      // User is signed in.
    } else {
      console.log("signed out");
      document.getElementById("btnSignOut").style.visibility = "hidden";
      document.getElementById("iconSignUp").style.visibility = "visible";
      document.getElementById("btnShoppingBag").style.visibility = "hidden";
      document.getElementById("btnShoppingcart").style.visibility = "hidden";
    }
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="width">
            <h1>MERN Team</h1>
          </div>

          <div className="icon f_flex width">
            <Link to={auth.currentUser === null ? "/Login" : "/"}>
              <i id="iconSignUp" className="fa fa-user icon-circle"></i>
              <button
                id="btnSignOut"
                type="button"
                onClick={signout}
                className="btnS btn-info"
              >
                sign out
              </button>
            </Link>
            <div className="cart">
              <Link to="/cart">
                <i id="btnShoppingBag" className="fa fa-shopping-bag icon-circle"></i>
                <span id="btnShoppingcart">{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
