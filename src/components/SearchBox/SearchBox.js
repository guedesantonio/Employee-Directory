import React from "react";

function SearchBox(props) {
  return (

    <form className="form d-flex justify-content-center form-inline">
      <input
        value={props.searchName}
        className="form-control mr-sm-2"
        type="text"
        onChange={props.handleInputChange}
        placeholder="Search"
        aria-label="Search">
      </input>
    </form>
  );
}

export default SearchBox;
