import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "../DataTable";
import axios from "axios";

// for teacher login
const studentcolumns = [
  {
    Header: "id",
    accessor: "id",
    style: {
      background: "red",
    },
  },
  {
    Header: "Admission Number",
    accessor: "admission_number",
    width: 50,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    width: 50,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
];

function ClassWiseStudents() {
  const { classId } = useParams();
  const [rowdata, setRowData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://school-lorien.herokuapp.com/school/students/class_students_list?class=${classId}`
      )
      .then((res) => setRowData(res.data));
  }, []);
  if (!rowdata) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="p-9 overflow-hidden">
      <DataTable
        columns={studentcolumns}
        data={rowdata}
        title="Class Wise student List"
      />
      {/* <div className="flex items-center justify-center pt-7">
        <button className="bg-[#4CAF50] font-bold  text-white p-4 text-center text-base cursor-pointer ">
          Mark attendance
        </button>
      </div> */}
    </div>
  );
}

export default ClassWiseStudents;
