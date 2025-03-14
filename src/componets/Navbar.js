import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <img src="assets/ook.png" className="logo" alt="logo" />
        </li>
        <div className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Arrival</li>
          <li>Library</li>
        </div>
        <li>
          <img src="assets/4.png" id="ell" alt="notification" />
        </li>
        <li>
          <img src="assets/perso4.png" id="perso" alt="profile" />
        </li>
        <li>
          <button className="button">Search</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
