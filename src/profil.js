import React from 'react'
import {useLocation} from 'react-router-dom';

const Profil = () => {
  const location = useLocation();
  const user = location.state ? JSON.parse(location.state.pass) : null
  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          {/* Render other user details here */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Profil;