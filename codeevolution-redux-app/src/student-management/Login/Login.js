import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Login.css";
import axios from "axios";
import useToken from "../../student-management/useToken";
import { decodedAccessToken } from "../utils";

function Login() {
  const { setUserToken } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState();
  const handleSubmit = (e) => {
    console.log("hai");

    axios
      .post(
        "https://school-lorien.herokuapp.com/api/token/",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const decodedUser = decodedAccessToken(response.data.access);
        setUserToken("access_token", response.data.access);
        setUserToken("refresh_token", response.data.refresh);
        setLoginData(decodedUser);
      })
      .catch((err) => {
        // show error message
        console.log("error is", err);
      });
    e.preventDefault();
  };
  useEffect(() => {
    console.log("loginData", loginData);
    if (loginData) {
      loginData.is_admin && navigate("/dashboard", { replace: true });
      !loginData.is_admin && navigate("/teacherdashboard", { replace: true });
    }
  }, [loginData, navigate]);

  return (
    <div className="h-screen flex w-4/12 items-center">
      <div className="login-wrapper w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-bold text-primary mt-4 mb-12 text-center">
          Please Log In
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p className="font-bold">Email</p>
            <input
              className="w-full p-2 text-primary border border-2rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p className="font-bold">Password</p>
            <input
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="flex justify-end flex-row">
            <div>
              <button
                className="text-white bg-blue-600 py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark font-bold"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
