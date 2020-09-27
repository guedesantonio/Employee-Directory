import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import EmployeeList from "./components/EmployeeCard";
import employee from "./employees.json"

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
              image={employee[0].image}
              name={employee[0].name}
              phone={employee[0].phone}
              email={employee[0].email}
              DOB={employee[0].DOB}
            />
          </div>
      </div>
  
    );


  }

}


export default App;
