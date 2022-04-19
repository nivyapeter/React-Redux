import React, { useState} from "react"
import "antd/dist/antd.css";
import {AiOutlineEdit , AiOutlineDelete} from "react-icons/ai"
import { Modal,Button,Input } from "antd"
// import data from "../src/student-management/data";
import dataone from "../src/student-management/dataone";
import DataTable from "./student-management/DataTable";
import { ColumnFilter } from "./student-management/ColumnFilter";
// import Login from "../src/student-management/Login"
function App() {

  const [isEditing,setIsEditing]=useState(false)
  const [editingStudent,setEditingStudent] = useState(null)

  const [rowdata, setRowData] = useState(dataone)
  const onEditStudent = () => {
    setIsEditing(true)
    setEditingStudent()
  }
  //  for admin login
  const columns = [
    {
      Header: "id",
      accessor: "id",
      Filter:ColumnFilter
    },
    {
      Header: "admission_number",
      accessor: "admission_number",
      Filter:ColumnFilter
    },
    {
      Header: "first_name",
      accessor: "first_name",
      Filter:ColumnFilter
    },
    {
      Header: "last_name",
      accessor: "last_name",
      Filter:ColumnFilter
    },
    {
      Header: "fee_status",
      accessor: "fee_status",
      Filter:ColumnFilter
    },
    {
      Header: 'action',
      accessor: 'action',
      Cell: () => (
          <div className="flex items-center">
          <Button style={{color:"white", backgroundColor: "blue", borderRadius:"25px",fontWeight:"bold"}} onClick={() =>onEditStudent() }> Edit</Button>
          </div>
      
      ),
      Filter:ColumnFilter
    },
  ];

  // for teacher login
  const teachercolumns = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "class",
      accessor: "class",
    },
    {
      Header: 'action',
      accessor: 'action',
      Cell: () => (
          <div className="flex items-center">
          <Button style={{color:"white", backgroundColor: "blue", borderRadius:"25px",fontWeight:"bold"}} onClick={() =>onEditStudent() }> Edit</Button>
          </div>
      
      ),
    },
  ];
  const resetEditing =()=> {
    setIsEditing(false)
    setEditingStudent(null)
  }
  return (
    <div className="h-screen">
    <div className="container m-auto w-11/12">
      <div className="flex justify-center mt-8">
        {/* <DataTable columns={columns} data={rowdata} title="All Students List"/> */}
        {/* <Login /> */}
        <DataTable columns={teachercolumns} data={rowdata} title="All Class List"/> 
      </div>
    </div>

    <Modal
    title="Edit Student"
    visible={isEditing}
    onCancel={()=>{
      resetEditing()
    }}
    onOk={()=>{
      setRowData((pre) => {
        return pre.map((student) => {
          if (student.id === editingStudent.id) {
            return editingStudent;
          } else {
            return student;
          }
        });
      });
      resetEditing()
    }}
    okText="save"
    >
    <Input style={{margin:"10px"}} value={editingStudent ?.admission_number} placeholder="admission_number" onChange={(e) => {
      setEditingStudent(rowdata=> {
        return {...rowdata,admission_number:editingStudent.target.value}
      })
    }}></Input>
    <Input style={{margin:"10px"}} value={editingStudent ?.first_name} placeholder="first_name" onChange={(e) => {
      setEditingStudent(rowdata=> {
        return {...rowdata,first_name:editingStudent.target.value}
      })
    }}></Input>
    <Input style={{margin:"10px"}} value={editingStudent ?.last_name} placeholder="last_name" onChange={(e) => {
      setEditingStudent(rowdata=> {
        return {...rowdata,last_name:editingStudent.target.value}
      })
    }}></Input>
    <Input style={{margin:"10px"}} value={editingStudent ?.fee_status} placeholder="fee_status" onChange={(e) => {
      setEditingStudent(rowdata=> {
        return {...rowdata,fee_status:editingStudent.target.value}
      })
    }}></Input>
    </Modal>
    </div>
  )
}
export default App
// import './App.css';
// import { Provider } from 'react-redux'
// import store from './redux/store';
// import IceCreamContainer from './cake-shop/components/IceCreamContainer';
// function App() {
//   return (
//     <Provider store={store}>
//     <div className="App">
//        {/* <CakeContainer /> */}
//        <IceCreamContainer />
//     </div>
//     </Provider>
//   );
  
// }

// export default App;

// import React, { useState } from 'react';
// import MaterialTable from 'material-table';
// import {Routes, Route} from 'react-router-dom';
// import './App.css';
// import StudentMainList from '../src/student-management/StudentMainList';
// import Login from '../src/student-management/Login';


// function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  // const data = [
  //   { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  //   { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  // ];
  
  // const columns = [
  //   { title: "Name", field: "name" },
  //   { title: "Surname", field: "surname" },
  //   { title: "Birth Year", field: "birthYear", type: "numeric" },
  // ];
  // return (
  //   <div className="wrapper">
  //     <h1>Hai</h1>
  //     <div>
  //     <MaterialTable className="bg-blue-600" title="Basic Table" columns={columns} data={data} />;
      {/* <h1>Application</h1>
      <Routes>
          <Route path="/StudentMainList">
            <StudentMainList />
          </Route>
          </Routes> */}
          {/* <StudentMainList /> */}
//           </div>
//     </div>
//   );
// }

// export default App;




