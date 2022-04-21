import React, { useEffect, useState} from "react"
import "antd/dist/antd.css";
// import { useNavigate } from "react-router-dom";
import { Modal,Button,Input } from "antd";
import DataTable from "../DataTable";
import axios from "axios";
// import { useParams } from 'react-router'
// import dataone from "../dataone";


 // for teacher login
 const teachercolumns = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: 'action',
    accessor: 'action',
    Cell: () => (
        <div className="flex items-center">
        <Button style={{color:"white", backgroundColor: "blue", borderRadius:"25px",fontWeight:"bold"}} >Show Details</Button>
        </div>
    
    ),
  },
];


function TeacherDashboard() {
  
  const [rowdata, setRowData] = useState()
  useEffect(() => {
    axios.get("https://school-lorien.herokuapp.com/school/class/").then((res) =>setRowData(res.data))
  },[])
  
  if (!rowdata) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="p-9 overflow-hidden">
      <DataTable columns={teachercolumns} data={rowdata} title="All Class List"/>
    </div>
  )
}

export default TeacherDashboard