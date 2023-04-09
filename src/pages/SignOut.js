import React, { Fragment } from 'react';
import Authentication from '../components/authentication';

function SignOut() {
  return (
    <>
      <section className="sign">
        <div className="sign__wrapper">
          <Authentication />
        </div>
      </section>
    </>
  );
}

export default SignOut;
