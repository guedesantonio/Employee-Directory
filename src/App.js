import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import employees from "./employees.json"

class App extends Component {
// Setting the component's initial state
  state = {
    employees : employees,
    searchName: ""
  }

  handleInputChange = event => {
   // Getting the value and name of the input which triggered the change 
    let value = event.target.value;
  
    this.setState({
      searchName: value
    });
  };


  render() {

    return (
      <Wrapper>
          <Header/>




          <form className="form d-flex justify-content-center form-inline">
          <input 
            value={this.state.searchName}
            className="form-control mr-sm-2" 
            type="text"
            onChange={this.handleInputChange}
            placeholder="Search" 
            aria-label="Search">
          </input>
          </form>
          <div className="container-fluid text-center">
            <EmployeeTable  employees={this.state.employees} searchName={this.state.searchName}/>
          </div>
      </Wrapper>
  
    );


  }

}


export default App;

// sort ={this.sort}