import React from "react";

function EmployeeCard(props) {
  return (
      <div className="row">
        <div className="col">
          <div className= "img-container">
            <img className= "img-fluid" alt={props.name} src={props.image}/>
          </div>
        </div>
        <div className="col">{props.name}</div>
        <div className="col">{props.phone}</div>
        <div className="col">{props.email}</div>
        <div className="col">{props.DOB}</div>
      </div>
  );
}

export default EmployeeCard;
