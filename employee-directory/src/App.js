import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
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
          <SearchBar/>
          <div className="container-fluid text-center">
            <EmployeeList/>
            {this.state.employees.map(employee=> (
              <EmployeeCard
              image={employee.image}
              name={employee.name}
              phone={employee.phone}
              email={employee.email}
              DOB={employee.DOB}
            />
            ))}
          </div>
      </Wrapper>
  
    );


  }

}


export default App;
