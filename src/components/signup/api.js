const BASE_URL = 'https://rails-wout.onrender.com';

export const signUp = async (email, password, passwordConfirmation) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: { email, password, password_confirmation: passwordConfirmation },
    }),
  });
  if (response.ok) {
    return response;
  }
  throw new Error(`Failed to sign up: ${response.statusText}`);
};

export const signIn = async (email, password) => {
  const response = await fetch(`${BASE_URL}/users/sign_in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: { email, password } }),
  });
  if (response.ok) return response;

  throw new Error(`Failed to sign in: ${response.statusText}`);
};
