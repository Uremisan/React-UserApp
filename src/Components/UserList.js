import React from 'react';
import UserItem from './UserItem';

function UserList (props) { 
  return (
    <div className="wrap">
      <h1>User List</h1>
      <br /><br />
      {props.allUsers.map((user) => (
        <UserItem user={user} delete={props.delete} update={props.update} />
      ))}
    </div>
  )
}

export default UserList;