import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import employees from "./employees.json"

class App extends Component {

  state = {
    employees : employees

  }

  searchName = () => {};


  render() {

    return (
      <Wrapper>
          <Header/>
          <form className="d-flex justify-content-center form-inline">
          <input 
            className="form-control mr-sm-2" 
            type="search" 
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
              class={employee.class}
            />
            ))}
          </div>
      </Wrapper>
  
    );


  }

}


export default App;
