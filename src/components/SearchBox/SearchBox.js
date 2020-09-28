import React from "react";

const styles = {
  formStyle: {
    padding: "20px"
  }
};

function SearchBox(props) {
  return (

    <form style={styles.formStyle} className="form d-flex justify-content-center form-inline">
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
