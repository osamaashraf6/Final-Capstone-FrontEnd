import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Section1() {
  return (
    <>
      <div className="">
        <NavLink to="/SignUp/Section2">go to sign in</NavLink>
      </div>
    </>
  );
}

export default Section1;
