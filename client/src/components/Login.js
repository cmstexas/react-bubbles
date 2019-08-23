import React, { useState } from 'react';
import axios from 'axios';


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialValue = {
    username: 'Lambda School',
    password: 'i<3Lambd4'
  }

  const Login = ( props ) => {
    const [creds, setCreds] = useState(initialValue);
  
    const handleChange = event => {
      setCreds({...creds, [event.target.name]: event.target.value});
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
          console.log(res);
          localStorage.setItem('token', res.data.payload);
          props.history.push("/bubbles");
        })
        .catch(err => console.log(err.response));
    };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login Here</p>
      <form onSubmit={handleSubmit}>
      <input type="text"
             name="username"
             placeholder="username"
             onChange={handleChange}
             value={creds.username} />
      <input type="password"
             name="password"
             placeholder="password"
             onChange={handleChange}
             value={creds.password} />
      <button type="submit">Log In</button>
    </form>
    </>
  );
};

export default Login;
