import React from "react";
import './Header.css';



function Header() {
  return (
    <header  className="header">
      <h1 className="header d-flex justify-content-center">Employee Directory</h1>
      <p1 className="header d-flex justify-content-center">Click on carrots to filter by heading or use the search box to narrow your results</p1>
      <hr className="hr"></hr>
    </header>
  );
}

export default Header;
