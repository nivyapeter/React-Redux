import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./student-management/AdminDashboard/Dashboard";
import TeacherDashboard from "./student-management/TeacherDashboard/TeacherDashboard";
import Login from "../src/student-management/Login/Login";
import ClassWiseStudents from "./student-management/TeacherDashboard/ClassWiseStudents";
import useToken from "../src/student-management/useToken";
import { decodedAccessToken } from "./student-management/utils";

function App() {
  const [decodedUser, setDecodedUser] = useState();
  const { getUserToken } = useToken();
  useEffect(() => {
    const token =
      getUserToken("access_token") &&
      decodedAccessToken(getUserToken("access_token"));
    token && setDecodedUser(token);
  }, [getUserToken("access_token")]);
  const isAdmin = decodedUser?.is_admin;
  // if(!getUserToken("access_token")) {
  //   return <Login/>
  // }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              !getUserToken("access_token") ? (
                <Login />
              ) : isAdmin ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/teacherdashboard" replace />
              )
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/teacherdashboard"
            element={
              !isAdmin && getUserToken("access_token") ? (
                <TeacherDashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/class" element={<ClassWiseStudents />} />
          <Route path="/teacherdashboard/class/:classId" element={<ClassWiseStudents />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
