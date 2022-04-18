import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import './Login.css';

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  return(
      <div className="h-screen flex bg-gray-400">
    <div className="login-wrapper w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
      <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" type="text" placeholder='Username' onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" type="password"  placeholder='Password'onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className="flex justify-between flex-row">
        <div>
          <button className="text-white bg-blue-600 py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark" type="submit">Admin</button>
        </div>
        <div>
          <button className="bg-blue-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark" type="submit">Teacher</button>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };