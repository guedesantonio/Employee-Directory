import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

function EmployeeTable(props) {
  return (
    <table class="table">
      <thead>
        <tr>
        {/* onClick={() => props.sort("image")} */}
          <th  scope="col">Image </th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <EmployeeRow
            image={employee.image}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            DOB={employee.DOB}
            class={(employee.name.includes(props.searchName)) ? employee.class : "d-none"}
          />
        ))}
      </tbody>
    </table>
  );

}

export default EmployeeTable;


