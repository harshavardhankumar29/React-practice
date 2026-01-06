import React from 'react'
import UserContext from '../UserContext.js';
import { useContext } from 'react';

const Profile = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
        <h2>Profile</h2>
        {user ? (
            <div>
                <p>Username: {user.username}</p>
                <p>Password: {user.password}</p>
            </div>
        ) : (
            <p>No user logged in.</p>
        )}
    </div>
  )
}

export default Profile  