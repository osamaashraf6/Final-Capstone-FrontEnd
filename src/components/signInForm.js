/* eslint-disable react/prop-types */
import { useState } from 'react';
import { signIn } from './api';

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      onSignIn({ email });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
