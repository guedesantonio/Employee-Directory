import React from "react";

const styles = {
  divStyle: {
   fontWeight: "bold"
  }


}

function EmployeeList() {
  return (
      <div style={styles.divStyle} className="row">
        <div className="col">Image</div>
        <div className="col">Name</div>
        <div className="col">Phone</div>
        <div className="col">Email</div>
        <div className="col">DOB</div>
      </div>
  );
}

export default EmployeeList;
