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
            <EmployeeCard
              image={employees[0].image}
              name={employees[0].name}
              phone={employees[0].phone}
              email={employees[0].email}
              DOB={employees[0].DOB}
            />
          </div>
      </div>
  
    );


  }

}


export default App;
