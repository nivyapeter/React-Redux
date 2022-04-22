import { useState } from 'react';

export default function useToken() {
  const getToken = (tokenKey) => {
    const tokenString = localStorage.getItem(tokenKey);
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (tokenKey,userToken) => {
    localStorage.setItem(tokenKey, JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setUserToken: saveToken,
    token,
    getUserToken:getToken

  }
}