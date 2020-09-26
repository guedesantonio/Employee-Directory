import React from "react";
import './EmployeeList.css';

function EmployeeList() {
  return (
    <div className="d-flex justify-content-center row">
      <div className="col">Image</div>
      <div className="col">Name</div>
      <div className="col">Phone</div>
      <div className="col">Email</div>
      <div className="col">DOB</div>
    </div>
  );
}

export default EmployeeList;
