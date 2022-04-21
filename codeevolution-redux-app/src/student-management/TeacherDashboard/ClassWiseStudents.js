import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Modal,Button,Input } from "antd";
import DataTable from "../DataTable";
// import data from "../data";
import axios from "axios";


 // for teacher login
 const studentcolumns = [
  {
    Header: "id",
    accessor: "id",
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
    Header: "attendance",
    accessor: "attendance",
  },
 
];

function ClassWiseStudents() {
  const [rowdata, setRowData] = useState()
  useEffect(() => {
    axios.get("https://school-lorien.herokuapp.com/school/students/class_students_list?class=2").then((res) =>setRowData(res.data))
  },[])
  console.log(rowdata);
  if (!rowdata) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="p-9 overflow-hidden">
      <DataTable columns={studentcolumns} data={rowdata} title="Class Wise student List"/>
    </div>
  )
}

export default ClassWiseStudents