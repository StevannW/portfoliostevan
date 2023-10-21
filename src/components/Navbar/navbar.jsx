import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="left-navbar">
        <div className="logo">STEVAN</div>
      </div>
      <div className="right-navbar">
        <div className="list">
          <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="footer" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="footer" spy={true} smooth={true}>
          <button className="button">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
