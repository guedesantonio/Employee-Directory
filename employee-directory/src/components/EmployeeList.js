import React from "react";
import './EmployeeList.css';
import EmployeeCard from "./EmployeeCard";
import employee from "./employee.json"

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
      <EmployeeCard
      image={employee[0].image}
      name={employee[0].name}
      phone={employee[0].phone}
      email={employee[0].email}
      DOB={employee[0].DOB}
      />
    </div>
  );
}

export default EmployeeList;
