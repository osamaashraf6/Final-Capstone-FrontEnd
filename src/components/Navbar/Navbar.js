import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AddReserve">Add Reserve</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/SignUp">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Reserve">Reserve</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
