import React, { Component } from 'react';

class Services extends Component{
  render(){
    return(
      <div className='serviceItem'>
        <div className='mainImg'></div>
        <h3 className='type'>{this.props.type}</h3>
        <p className='description'>{this.props.summary}</p>
      </div>
    );
  }
}

export default Services;