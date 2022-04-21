import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./student-management/AdminDashboard/Dashboard";
import TeacherDashboard from "./student-management/TeacherDashboard/TeacherDashboard";
import Login from "../src/student-management/Login/Login";
import ClassWiseStudents from "./student-management/TeacherDashboard/ClassWiseStudents";
// import useToken from "../src/student-management/useToken";

function App() {
  // const { token, setUserToken , getUserToken} = useToken();

  // if(!getUserToken("access_token")) {
  //   return <Login setToken={setUserToken} />
  // }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teacherdashboard" element={<TeacherDashboard />} />
          <Route path="/class" element={<ClassWiseStudents />} />
          <Route path="/class/id" element={<ClassWiseStudents />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
