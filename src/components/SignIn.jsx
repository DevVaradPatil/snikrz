import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the hook

function SignIn() {
  const { login, user } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  if (user) {
    // Redirect to the homepage if the user is already authenticated
    window.location.href = '/';
  }

  const [loginSuccess, setLoginSuccess] = useState(false);

  if (loginSuccess) {
    // Redirect to the homepage if login is successful
    window.location.href = '/';
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend login route
      const response = await axios.post('https://snikrz-backend.onrender.com/api/auth/login', formData);

      // Handle successful login
      console.log('Login successful', response.data);

      const userDataWithUsername = {
        ...response.data,
        username: formData.username, // Add the username to userData
      };

      login(userDataWithUsername); // Store user data in context

      setLoginSuccess(true);
      window.location.href = '/';
    } catch (error) {
      // Handle login error
      console.error('Login error', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border h-14 border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-2 border h-14 border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p>
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
