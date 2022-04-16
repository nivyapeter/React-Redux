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

import React, { useState } from 'react';
// import MaterialTable from 'material-table';
// import {Routes, Route} from 'react-router-dom';
// import './App.css';
// import StudentMainList from '../src/student-management/StudentMainList';
// import Login from '../src/student-management/Login';


function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  const data = [
    { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
    { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  ];
  
  const columns = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
  ];
  return (
    <div className="wrapper">
      <h1>Hai</h1>
      <div>
      {/* <MaterialTable title="Basic Table" columns={columns} data={data} />; */}
      {/* <h1>Application</h1>
      <Routes>
          <Route path="/StudentMainList">
            <StudentMainList />
          </Route>
          </Routes> */}
          {/* <StudentMainList /> */}
          </div>
    </div>
  );
}

export default App;