import React, { Component } from 'react';
import './App.css';
import menu from './menu.png'
import search from './search.png'
import TabComponent from './Tab/Tab';

class App extends Component {
  render() {
    return (
       <div className="App">
      <div className="main-app">
        <div className="hamburger"><img className="main-image" src={menu}/></div>
        <div className="info">whatever@gmail.com</div>
        <div className="search-main"><img className="main-image" src={search}/></div>
      </div>
       
      <TabComponent/>
    </div> 
    );
  }
}

export default App;
 