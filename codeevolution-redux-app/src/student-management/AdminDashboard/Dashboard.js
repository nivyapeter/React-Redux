import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../DataTable";
import "../AdminDashboard/dashboard.css";
import Popup from "../components/Popup";


//  for admin login
function Dashboard() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [dataOne, setData] = useState();
  useEffect(() => {
    axios
      .get("https://school-lorien.herokuapp.com/school/students/")
      .then((res) => setData(res.data));
  }, []);
  if (!dataOne) {
    return <h2>loading...</h2>;
  }

  const columns = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "Admission Number",
      accessor: "admission_number",
    },
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    // {
    //   Header: "Class Division",
    //   accessor: "Class Division",
    // },
    {
      Header: "Fee Expiry Date",
      accessor: "fee_expiry_date",
    },
    {
      Header: "Fee Status",
      accessor: "fee_status",
      Cell: ({row}) => {
        const handleButtonClick = () => {
          axios.post(`https://school-lorien.herokuapp.com/school/students/${row.values.id}/toggle_fee/`)
          .then((res)=> {
            setData(res.data);
          });
          console.log(dataOne);
      }
      
        return (
        <div>
          <label className="relative w-[60px] h-[34px]" onClick={handleButtonClick}>
            <input
              className="opacity-0 w-7 h-0"
              type="checkbox"
              // checked={row.values.fee_status === "FP"}
            />
            <span className="slider round"></span>
          </label>
        </div>
      );
        }
    },
  ];

  return (
    <div className="p-9 overflow-hidden">
      <div className="flex items-center justify-end pt-7">
        <div className="flex justify-between gap-4">
        <button  onClick={() => setButtonPopup(true)}className="bg-[#4CAF50] font-bold  text-white p-2 rounded text-center text-base cursor-pointer ">
          Add Student
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
        <button className="bg-[#4CAF50] font-bold  text-white p-2 rounded text-center text-base cursor-pointer ">
          Logout
        </button>
        </div>
      </div> 
      <DataTable columns={columns} data={dataOne} title="All Students List" />
    </div>
  );
}

export default Dashboard;
