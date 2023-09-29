import React from 'react';
import { useAuth } from '../AuthContext';

const Profile = () => {
  const { logout } = useAuth(); // Access the logout function from the context

  const handleLogout = () => {
    logout(); // Call the logout function when the button is clicked
    window.location.href = '/signin'
  };

  return (
    <div className='w-full px-20 my-10'>
    <div className='text-2xl font-bold'>
     Your Profile
    </div>
    <p><b>{localStorage.getItem('username')}</b></p>

    <button
    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
    onClick={handleLogout}
  >
    Logout
  </button>
  </div>
  );
};

export default Profile;
