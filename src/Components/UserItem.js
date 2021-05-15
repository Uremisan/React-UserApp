import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import Editform from './Editform';

function UserItem (props) {
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  return (
    <div className="row">
      <div className="col-md-3"><h4>Username</h4>{props.user.username}</div>
      <div className="col-md-3"><h4>Email</h4>{props.user.email}</div>
      <div className="col-md-2"><h4>Country</h4>{props.user.country}</div>
      <div className="col-md-4"><h4>Action</h4>
        <button id="b1" onClick={showModal}>Update</button>
        <Modal show={isModalVisible} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Editform
              user={props.user}
              updateUser={props.updateUser} 
              hideModal={hideModal}
            />
          </Modal.Body>
        </Modal>

        <button id="b2"
        onClick={() => { props.delete(props.user.id)}}>
          Delete</button>
      </div>
    </div>
    
  )
}

export default UserItem;