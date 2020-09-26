import React from 'react';
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
function App() {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <EmployeeList/>
    </div>

  );
}

export default App;
