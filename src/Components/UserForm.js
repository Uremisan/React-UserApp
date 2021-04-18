import React, {useState} from 'react';
import './UserForm.css'

function UserForm (props) {

  const [state, setState] = useState({
    username:'',
    email:'',
    password:'',
    country:'',
  });

  function handleOnChange(event) {
    setState({
      ...state, [event.target.name]: event.target.value,
    });
  }

  function handleSubmit () {
    let userId = 10000 + Math.random() * 10000000;
    let user = {...state, id:userId};
    props.addUser(user);
  }
  
  return (
    
    <div className="wrapper">
      <form>
        <h1>User Form</h1>
        <fieldset>
          <br /><label className="check">Username</label><br />
          <input type="text" id="textboxid" name="username" value={state.username} onChange={handleOnChange}></input>
        </fieldset> 
        
        <div>
          <fieldset>
          <br /><label className="check">Email</label><br />
          <input type="email" id="textboxid" name="email" value={state.email} onChange={handleOnChange}></input>
          </fieldset>
        </div> 

        <div>
          <fieldset>
          <br /><label className="check">Password</label><br />
          <input type="password" id="textboxid" name="password" value={state.password} onChange={handleOnChange}></input>
          </fieldset>
        </div> 

        <div>
          <fieldset>
          <br /><label className="check">Country</label><br />
          <input type="text" id="textboxid" name="country" value={state.country} onChange={handleOnChange}></input>
          </fieldset>
        </div> 

        <div>
          <br /><button type="button" onClick={handleSubmit}> Create User</button><br />
        </div>
      </form>
    </div>
  );
}

export default UserForm