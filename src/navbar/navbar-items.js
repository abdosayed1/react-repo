import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

class NavbarItems extends Component{

  render() {
    if(this.props.currentDir === this.props.name) {
      return(
        <li className='active'>
          <Link to={this.props.src}>{this.props.name}</Link>
        </li>
      );
    }else{
      return(
        <li>
          <Link to={this.props.src}>{this.props.name}</Link>
        </li>
      );
    }
  }
}

export default NavbarItems;