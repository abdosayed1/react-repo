import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Staff extends Component{
  render(){
    return(
      <div className='staffItem'>
        <div className='main-container'>
          <div className='mainImg'></div>
          <h3 className='type'>{this.props.type}</h3>
          <p className='description'>{this.props.summary}</p>
          <img src={this.props.img} />
        </div>
      </div>
    );
  }
}

export default Staff;