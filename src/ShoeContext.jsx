import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext for user authentication
import { useNavigate } from "react-router-dom";

// Create a context
const ShoeContext = createContext();

// Create a provider component
const ShoeProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const { user } = useAuth(); // Get the authenticated user

  useEffect(() => {
    if (user) {
      // Fetch the shoe data including user's favorites based on user's username
      axios
        .get(`https://snikrz-backend.onrender.com/api/shoes?username=${user.username}`)
        .then((response) => {
          setShoes(response.data);
        })
        .catch((error) => {
          console.error('Error fetching shoe data:', error);
        });
    }
  }, [user]);

  return (
    <ShoeContext.Provider value={shoes}>
      {children}
    </ShoeContext.Provider>
  );
};

export { ShoeContext, ShoeProvider };
