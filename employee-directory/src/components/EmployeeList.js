import React from "react";
import './EmployeeList.css';

function EmployeeList() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col">Image</div>
        <div className="col">Name</div>
        <div className="col">Phone</div>
        <div className="col">Email</div>
        <div className="col">DOB</div>
      </div>
    </div>
  );
}

export default EmployeeList;
