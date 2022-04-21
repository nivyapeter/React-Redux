import React from 'react'

function StudentProfile({name,gender,birthdate,address,is_active}) {
  return (
    <div className="container m-auto">
        <h2 className="text-center">{name}</h2>
        <div className="flex flex-row  justify-center items-center w-full">
          <div className="w-1/2 h-[20vh]">
              <h3>Personal details</h3>
              <div>
                  <h3>Gender : </h3>
                  <p>{gender}</p>
              </div>
              <div>
                  <h3>Birth Date : </h3>
                  <p>{birthdate}</p>
              </div>
              <div>
                  <h3>Address : </h3>
                  <p>{address}</p>
              </div>
          </div>
          <div>
              <h3>Class Details</h3>
              <div>
                  <h3>Status</h3>
                  <button>{is_active ? "Active" : "Inactive"}</button>
              </div>
          </div>
        </div>

    </div>
  )
}

export default StudentProfile