import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json"

class App extends Component {

  state = {
    employees : employees

  }

  searchName = () => {};


  render() {

    return (
      <div>
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
      </div>
  
    );


  }

}


export default App;
