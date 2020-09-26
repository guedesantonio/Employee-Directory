import React from 'react';
import './App.css';
import Header from "./components/Header";
import Section from "./components/SearchBar";
import Navbar from "./components/EmployeeList";
function App() {
  return (
    <Header/>
    <SearchBar/>
    <EmployeeList/>

  );
}

export default App;
