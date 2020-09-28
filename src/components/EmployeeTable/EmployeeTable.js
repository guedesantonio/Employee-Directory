import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

const styles = {
  containerStyle: {
    padding: "20px"
  }
};

function EmployeeTable(props) {
  return (
    <table  style={styles.tableStyle} className="table table-hover table-striped">
      <thead>
        <tr>
          <th  scope="col">Image </th>
          <th onClick={() => props.sort()} scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <EmployeeRow
            key={employee.id}
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


