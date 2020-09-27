import React from "react";
import './EmployeeCard.css';
function EmployeeCard(props) {
  return (
      <div className="row  list-group-item-secondary">
        <div className="col">
          <div className="container">
            <div className= "img-container">
              <img className= "" alt={props.name} src={props.image}/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-center textbox">
          {props.name}</div>
          </div>
        <div className="col">
          <div className= "text-center textbox">
          {props.phone}</div>
          </div>
        <div className="col">
          <div className="text-center textbox">
          {props.email}</div>
          </div>
        <div className="col">
          <div className="text-center textbox">
          {props.DOB}</div>
          </div>
      </div>
  );
}

export default EmployeeCard;
