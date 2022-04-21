import { useState } from 'react';

export default function useToken() {
  const getToken = (tokenKey) => {
    const tokenString = sessionStorage.getItem(tokenKey);
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (tokenKey,userToken) => {
    sessionStorage.setItem(tokenKey, JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setUserToken: saveToken,
    token,
    getUserToken:getToken

  }
}