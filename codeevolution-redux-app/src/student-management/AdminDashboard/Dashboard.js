import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Modal, Button, Input } from "antd";
import DataTable from "../DataTable";
import { fetchStudentData } from "../api-calls";


//  for admin login
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
    Header: "action",
    accessor: "action",
    Cell: () => (
      <div className="flex items-center">
        <Button
          style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Edit
        </Button>
      </div>
    ),
  },
];

function Dashboard() {
  const [dataOne, setData] = useState();
  // const stu = fetchStudentData();
  // console.log(stu);

  useEffect(() => {
    axios
      .get("https://school-lorien.herokuapp.com/school/students/")
      .then((res) => setData(res.data));
  }, []);
  if (!dataOne) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="p-9 overflow-hidden">
      <DataTable columns={columns} data={dataOne} title="All Students List" />
    </div>
  );
}

export default Dashboard;
