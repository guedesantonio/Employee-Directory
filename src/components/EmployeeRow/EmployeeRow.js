import React from "react";
import './EmployeeRow.css';
function EmployeeRow(props) {
  return (
    <tr>
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

// {/* <div className={"row  list-group-item-secondary " + props.class}>
//         <div className="col">
//           <div className="container">
//             <div className= "img-container">
//               <img className= "" alt={props.name} src={props.image}/>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="text-center textbox">
//           {props.name}</div>
//           </div>
//         <div className="col">
//           <div className= "text-center textbox">
//           {props.phone}</div>
//           </div>
//         <div className="col">
//           <div className="text-center textbox">
//           {props.email}</div>
//           </div>
//         <div className="col">
//           <div className="text-center textbox">
//           {props.DOB}</div>
//           </div>
//       </div> */}