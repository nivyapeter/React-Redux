import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";
import axios from "axios";
import { Link } from "react-router-dom";

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
    Header: "action",
    accessor: "action",
    Cell: ({ row }) => (
      <div className="flex items-center">
        {/* <Button style={{color:"white", backgroundColor: "blue", borderRadius:"25px",fontWeight:"bold"}}>Show Details</Button> */}
        {/* <Link style={{color:"white", backgroundColor: "blue", borderRadius:"25px",fontWeight:"bold",padding:"8px"}} to ={'class/' + row.values.name}>Show Details</Link> */}
      </div>
    ),
  },
];

function TeacherDashboard() {
  const [rowdata, setRowData] = useState();
  useEffect(() => {
    axios
      .get("https://school-lorien.herokuapp.com/school/classes/")
      .then((res) => setRowData(res.data));
  }, []);

  if (!rowdata) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="md:p-44">
      <h2 className="text-center font-extrabold text-2xl -mt-3 text-black pb-10 pt-11">
        Class List
      </h2>

      <div className=" overflow-hidden flex gap-x-12 gap-y-10 flex-wrap items center justify-center pb-20">
        {/* <DataTable columns={teachercolumns} data={rowdata} title="All Class List"/> */}
        {rowdata?.map((data, index) => (
          <div className="grid" key={index}>
            <Link className="w-[27vw] md:[5vw] md:p-9 p-[9px] h-[6vh] md:h-0"
              style={{
                color: "white",
                backgroundColor: "white",
                fontWeight: "bold",
                textAlign:"center",
                justifyContent:"center",
                color:"black",
              }}
              to={"class/" + data?.id}
            >
              {data.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherDashboard;
