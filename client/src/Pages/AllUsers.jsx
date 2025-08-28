import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/allUsers.css'
import axios from 'axios';

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetchUsers();
  },[]);

  const fetchUsers = async () =>{
    await axios.get('http://localhost:6001/api/users/fetch-users').then(
      (response) =>{
        setUsers(response.data);
      }
    )
  }

  return (
    <>
      <Navbar />

      <div className="all-users-page">
        <h2>All Users</h2>
        <div className="all-users-grid">
          {users.map((user) => (
            <div className="user-card" key={user._id}>
              <div className="user-avatar">
                <span>{user.username ? user.username.charAt(0).toUpperCase() : '?'}</span>
              </div>
              <div className="user-info">
                <p><b>Username:</b> {user.username}</p>
                <p><b>A/c ID:</b> {user._id}</p>
                <p><b>IFSC:</b> {user.ifsc}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Balance:</b> ₹{user.balance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllUsers