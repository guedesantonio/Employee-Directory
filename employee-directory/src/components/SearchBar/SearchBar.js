import React from "react";


function SearchBar() {
  return (
    <form className="d-flex justify-content-center form-inline">
      <input 
        className="form-control mr-sm-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search">
      </input>
    </form>
  );
}

export default SearchBar;
