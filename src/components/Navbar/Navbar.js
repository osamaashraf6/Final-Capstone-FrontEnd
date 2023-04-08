import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="">
        <div className="container">

          <ul>
            <li>
              <NavLink to="/Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AddReserve">
                AddReserve
              </NavLink>
            </li>
            <li>
              <NavLink to="/SignUp">
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reserve">Reserve </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
