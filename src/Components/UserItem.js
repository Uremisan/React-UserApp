import React from 'react';

function UserItem (props) {
  return (
    <div className="row">
      <div className="col-md-3"><h4>Username</h4>{props.user.username}</div>
      <div className="col-md-3"><h4>Email</h4>{props.user.email}</div>
      <div className="col-md-2"><h4>Country</h4>{props.user.country}</div>
      <div className="col-md-4"><h4>Action</h4>
        <button id="b1">Update</button>
        <button id="b2"
        onClick={() => { props.delete(props.user.id)}}>
          Delete</button>
      </div>
    </div>
    
  )
}

export default UserItem;