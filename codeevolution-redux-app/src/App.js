import React, { useState} from "react"
import data from "../src/student-management/data"
import AllStudentList from "./student-management/AllStudentList"
// import Login from "../src/student-management/Login"
import EditableRow from "./student-management/EditableRow"
import ReadOnlyRow  from "./student-management/ReadOnlyRow"
function App() {

  
  const [rowdata, setRowData] = useState(data)


  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    admission_number: "",
    first_namess: "",
    last_name: "",
    fee_status: "",
  });

  const [editFormData, setEditFormData] = useState({
    admission_number: "",
    first_namess: "",
    last_name: "",
    fee_status: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.AddDta,
      admission_number: addFormData.fullName,
      first_namess: addFormData.address,
      last_name: addFormData.phoneNumber,
      fee_status: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      admission_number: editFormData.fullName,
      first_namess: editFormData.address,
      last_name: editFormData.phoneNumber,
      fee_status: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      admission_number: contact.fullName,
      first_namess: contact.address,
      last_name: contact.phoneNumber,
      fee_status: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };



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
    {
      Header: "actions",
      accessor: "actions",
    },
    
  ]
  
  return (
    <div className="bg-purple-300 h-screen">
    <div className="container m-auto w-11/12">
      <h2 className="text-center font-extrabold ">All Students List</h2>
      <div className="flex justify-center mt-8">
        <AllStudentList columns={columns} data={rowdata} />
        {/* <Login /> */}
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




