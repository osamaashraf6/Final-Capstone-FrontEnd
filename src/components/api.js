const BASE_URL = 'http://localhost:3000';

// Function to sign up a new user
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

// Function to sign in an existing user
export const signIn = async (email, password) => {
  const response = await fetch(`${BASE_URL}/users/sign_in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: { email, password } }),
  });
  if (response.ok) return response;

  throw new Error(`Failed to sign in: ${response.statusText}`);
};
