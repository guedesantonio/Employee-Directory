import React from "react";
import './EmployeeRow.css';
function EmployeeRow(props) {
  return (
    <tr className={props.class}>
      <td>
        <div className="img-container">
          <img className="" alt={props.name} src={props.image} />
        </div>
      </td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.DOB}</td>

    </tr>
  );
}

export default EmployeeRow;