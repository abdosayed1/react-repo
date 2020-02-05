import React, { Component } from 'react';

class Staff extends Component{
  render(){
    return(
      <div className='staffItem'>
        <div className='mainImg'></div>
        <h3 className='type'>{this.props.type}</h3>
        <p className='description'>{this.props.summary}</p>
        <img src={this.props.img} alt={this.props.type}/>
      </div>
    );
  }
}

export default Staff;