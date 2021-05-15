import logo from './logo.svg';
import './App.css';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import UserItem from './Components/UserItem';
import { useState} from 'react';
import Editform from './Components/Editform';

function App() {

  const [users, setUsers] = useState([]);
  const [userToUpdate, setUserToUpdate] = useState({
    username: '',
    email: '',
    password: '',
    country: '',
  });

  function addUser(user) {
    setUsers([...users,user]);
  }

  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }
  function updateUser(id, updatedUserInfo) {
    let newUsers = users.map((user) => {
      if (user.id === id) {
        return updatedUserInfo;
      }
      return user;
    });
    setUsers(newUsers);
  }
  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <UserForm addUser={addUser} />
      </div>

      <div className="col-md-6">
        <UserList allUsers={users} delete={deleteUser} updateUser={updateUser}/>
      </div>
    </div>
  </div> 
  );
}

export default App;
