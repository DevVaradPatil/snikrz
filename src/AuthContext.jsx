import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  // Initialize user and username from local storage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedUsername = localStorage.getItem('username');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const login = (userData) => {
    // Extract the username from the userData and store it
    const extractedUsername = userData.username;
    console.log('Extracted Username:', extractedUsername); // Debugging log
    setUsername(extractedUsername); // Set the username state
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('username', extractedUsername); // Store the extracted username
  };

  const logout = () => {
    // Implement your logout logic here, e.g., clearing tokens and state
    setUser(null);
    setUsername(null);
    localStorage.removeItem('user');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the context
export function useAuth() {
  return useContext(AuthContext);
}
