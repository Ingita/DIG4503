import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from "./Components/HomePage";

class App extends React.Component {
  render(){
      return(
          <HomePage firstName ="Inga" />
      );
  }
}

export default App;
