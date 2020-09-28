import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper.js";
import SearchBox from "./components/SearchBox/SearchBox.js";
import Header from "./components/Header/Header";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import employees from "./employees.json"

class App extends Component {
  // Setting the component's initial state
  state = {
    employees: employees,
    searchName: ""
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change 
    let value = event.target.value;

    this.setState({
      searchName: value
    });
  };

  sort = event => {
    // Getting the value and name of the input which triggered the change 
    let value = event.target.getAttribute("value");
    let sortedEmployees = [];
    switch (value) {
      case "name":
        sortedEmployees = [...employees]
        sortedEmployees.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;
      case "email":
        sortedEmployees = [...employees]
        sortedEmployees.sort((a, b) => {
          if (a.email < b.email) {
            return -1;
          }
          if (a.email > b.email) {
            return 1;
          }
          return 0;
        });
        break;
      case "phone":
        sortedEmployees = [...employees]
        sortedEmployees.sort((a, b) => {
          if (a.phone < b.phone) {
            return -1;
          }
          if (a.phone > b.phone) {
            return 1;
          }
          return 0;
        });
        break;
        case "DOB":
        sortedEmployees = [...employees]
        sortedEmployees.sort((a, b) => {
          if (a.DOB < b.DOB) {
            return -1;
          }
          if (a.DOB > b.DOB) {
            return 1;
          }
          return 0;
        });
        break;
      default:

    }


    this.setState({
      employees: sortedEmployees
    });
  };

  render() {

    return (
      <Wrapper>
        <Header />
        <SearchBox searchName={this.state.searchName} handleInputChange={this.handleInputChange} />
        <EmployeeTable sort={this.sort} employees={this.state.employees} searchName={this.state.searchName} />
      </Wrapper>
    );
  }

}

export default App;

