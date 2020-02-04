import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import './css/App.css';

class App extends Component{
  render(){
    return(
        <HashRouter>
            <Route path={"/"} component={Home}></Route>
            
        </HashRouter>
    );
  }
}

class Home extends Component{
  render(){
    return(
      <div className="home">
        <Navbar />

      </div>
    );
  }
}

export default App;
