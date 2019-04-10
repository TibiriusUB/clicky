import React, { Component } from 'react';
import './App.css';
import TableTop from './components/TableTop';
import icons from "./icons.json";
//import Randomizer from "./components/Randomizer";Randomizer ={Randomizer}

class App extends Component {

  render() {
    return (
     <TableTop icons = {icons}  />
    );
  }
}

export default App;
//random = {tiles}