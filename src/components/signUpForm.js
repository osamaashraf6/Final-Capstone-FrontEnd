import { useState } from 'react';
import { signUp } from './api';

const SignUpForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password, passwordConfirmation);
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
      <input
        placeholder="password-confirmation"
        type="password"
        id="password-confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
