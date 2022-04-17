import React, { useState} from "react"
import data from "../src/student-management/data"
import AllStudentList from "./student-management/AllStudentList"
function App() {
  
  const [rowdata, setRowData] = useState(data)
  const columns = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "admission_number",
      accessor: "admission_number",
    },
    {
      Header: "first_name",
      accessor: "first_name",
    },
    {
      Header: "last_name",
      accessor: "last_name",
    },
    {
      Header: "fee_status",
      accessor: "fee_status",
    },
  ]
  
  return (
    <div className="bg-purple-300 h-screen">
    <div className="container m-auto w-11/12">
      <h2 className="text-center font-extrabold ">All Students List</h2>
      <div className="flex justify-center mt-8">
        <AllStudentList columns={columns} data={rowdata} />
      </div>
    </div>
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




