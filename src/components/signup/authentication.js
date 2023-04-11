import { useState, useEffect } from 'react';
import SignUpForm from './signUpForm';
import SignInForm from './signInForm';

const Authentication = () => {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignIn = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleClick = () => {
    const reg = !register;
    setRegister(reg);
  };

  return (
    <div className="d-flex flex-column">
      {user ? (
        <>
          <p>
            Signed in as
            <br />
            {user.email}
          </p>
          <button
            className="btn btn-success"
            type="button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          {register ? (
            <>
              <SignUpForm onSignIn={handleSignIn} />
              <p className="mt-4 align-self-center">Already Have an Account?</p>
            </>
          ) : (
            <>
              <SignInForm onSignIn={handleSignIn} />
              <p className="mt-4 align-self-center">
                Don&apos;t Have Account Yet?
              </p>
            </>
          )}

          <button
            className="btn btn-success align-self-center"
            type="button"
            onClick={handleClick}
          >
            {register ? 'Sign In' : 'Sign Up'}
          </button>
        </>
      )}
    </div>
  );
};

export default Authentication;
