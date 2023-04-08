import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Section3 from '../components/SignUp/Section3/Section3.js';

function SignUp() {
  return (
    <>
      <section className="sign">
        <div className="sign__wrapper">
          <Section3 />
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default SignUp;
