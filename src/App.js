import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
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
            <EmployeeList/>
            {this.state.employees.map(employee=> (
              <EmployeeCard
              image={employee.image}
              name={employee.name}
              phone={employee.phone}
              email={employee.email}
              DOB={employee.DOB}
              class={(employee.name.includes(this.state.searchName))?employee.class:"d-none"}
            />
            ))}
          </div>
      </Wrapper>
  
    );


  }

}


export default App;
