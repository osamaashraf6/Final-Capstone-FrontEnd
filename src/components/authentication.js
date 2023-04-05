import { useState, useEffect } from 'react';
import SignUpForm from './signUpForm';
import SignInForm from './signInForm';

const Authentication = () => {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);

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
    <>
      {user ? (
        <>
          <p>
            Signed in as
            {user.email}
          </p>
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          {register && <SignUpForm onSignIn={handleSignIn} />}
          {!register && <SignInForm onSignIn={handleSignIn} />}

          <button type="button" onClick={handleClick}>
            {register ? 'Sign In' : 'Sign Up'}
          </button>
        </>
      )}
    </>
  );
};

export default Authentication;
