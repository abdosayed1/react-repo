import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Staff from './staff';
import Services from './service';

class AboutItems extends Component{

  render() {
    if (this.props.name == 'summary'){
  
        return(
          <div className='summary'>
            <div className='main-container'>
              <h3>{this.props.name}</h3>
              <p>{this.props.description}</p>
            </div>
          </div>
        )
    }else if (this.props.name == 'staff'){
        let staffItem = this.props.description;
        staffItem = staffItem.map(
          (item, index) => {
            return(<Staff key={index} type={item.type} mainImg={item.mainImg} summary={item.summary} img={item.img}/>);
          }
        );
        return(
          <div className='staff'>
            {staffItem}
          </div>
        );
    }else{
      let serviceItem = this.props.description;
      serviceItem = serviceItem.map(
          (item, index) => {
            return(<Services key={index} type={item.type} summary={item.summary} img={item.img}/>);
          }
        );
        return(
          <div className='service'>
            <h3 className='serviceHead'>services</h3>
            <div className='main-container service-container'>
              {serviceItem}
            </div>
          </div>
        );
    }
  }
}

export default AboutItems;