import React, { useState } from 'react';


function EditUserForm(props) {

  const [state, setState] = useState({
    username: props.user.username,
    email: props.user.email,
    password: props.user.password,
    country: props.user.country,
  });


  function handleOnChange(event) {
    
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

 
  function handleSubmit() {
    

    let user = { ...state, id: props.user.id };
    props.updateUser(props.user.id, user);
    props.hideModal();
  }

  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={state.username} 
            onChange={handleOnChange} 
          />
        </div> 

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleOnChange} 
          />
        </div>

        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={state.country}
            onChange={handleOnChange} 
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleOnChange} 
          />
        </div>

        <div>
          
          <button type="button" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;