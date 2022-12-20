import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo__box">
          <ion-icon class="nav__logo" name="logo-twitter"></ion-icon>
        </div>
        <div className="list__item">
          <ul className="unorder__items">
            <li>
              <a href="ww">Home</a>
            </li>
            <li>
              <a href="ww">Explore</a>
            </li>
            <li>
              <a href="ww">Bookmarks</a>
            </li>
            <li>
              <a href="ww">List</a>
            </li>
            <li>
              <a href="ww">Profile</a>
            </li>
          </ul>
        </div>

        <div className="search__field">
          <input type="text" className="search" placeholder="#Explore" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
