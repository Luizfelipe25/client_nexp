import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          NEXP.
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="#contato">
              Contato
            </a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/Services1"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}

export default Navbar;
