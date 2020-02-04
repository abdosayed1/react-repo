import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends  Component{
  render(){
    return(
      <div className='navbar'>
        <div className='main-container'>
          <div className='logo'>
            <h2><span>A</span>DVENTURE</h2>
          </div>
          <div className='links'>
            <ul>
              <li className='active'><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
          </div>
          <div className='clear-fix'></div>
        </div>
      </div>
    );
  }
}

export default Navbar;