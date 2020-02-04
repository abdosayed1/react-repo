import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import NavbarItems from './navbar-items';
import '../css/navbar.css';

class Navbar extends  Component{
  state = {
    listItems : [
      {name: 'home', src: '/'},
      {name: 'about', src: '/about'},
      {name: 'services', src: '/services'},
      {name: 'contact', src: '/contact'},
    ]
  }
  render(){
    let items = this.state.listItems;
    items = items.map(function(item, index) {
      return(<NavbarItems name={item.name} src={item.src} key={index} currentDir={this.props.myPath}/>);
    }.bind(this));
    return(
      <div className='navbar'>
        <div className='main-container'>
          <div className='logo'>
            <h2><span>A</span>DVENTURE</h2>
          </div>
          <div className='links'>
            <ul>
              {items}
            </ul>
          </div>
          <div className='clear-fix'></div>
        </div>
      </div>
    );
  }
}

export default Navbar;