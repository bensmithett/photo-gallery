import React from 'react'

const UserList = ({users}) => (
  <ul>
    {
      Object.keys(users).map((userID) => (
        <li key={userID}>{users[userID].username}</li>
      ))
    }
  </ul>
)

export default UserList
