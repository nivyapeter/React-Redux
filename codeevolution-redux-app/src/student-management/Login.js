import React, { useState } from 'react';
// import {Navigate} from "react-router-dom";
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';

async function loginUser(credentials) {
  return fetch('https://school-lorien.herokuapp.com/api/token/', {
    method: 'POST',
    mode: 'no-cors',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({setToken}) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const[navigate,setNavigate] = useState(false);


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  
return(
      <div className="h-screen flex w-4/12 items-center">
    <div className="login-wrapper w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
      <h1 className="text-2xl font-bold text-primary mt-4 mb-12 text-center">Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="font-bold">Username</p>
          <input className="w-full p-2 text-primary border border-2rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" type="text" placeholder='Username' onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p className="font-bold">Password</p>
          <input className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" type="password"  placeholder='Password'onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className="flex justify-end flex-row">
        <div>
          <button className="text-white bg-blue-600 py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark font-bold" type="submit">Login</button>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};