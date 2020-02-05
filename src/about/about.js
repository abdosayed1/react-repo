import React, { Component } from 'react';
import AboutItems from './about-items';
import Navbar from '../navbar/navbar';
import '../css/about.css';

//import services images
import Flights from '../images/flights.jpg';
import Manage from '../images/manage-trips.jpg';
import LastMinute from '../images/last-minute-decision.jpg';

//import staff images
import John from '../images/john.jpg';
import MainJohn from '../images/ceo.jpg';
import Michael from '../images/michael.jpg';
import MainMichael from '../images/developer.jpg';
import Ashley from '../images/ashley.jpg';
import MainAshley from '../images/customer.jpg';

class About extends Component{
  state = {
    aboutItems:[
      {name: 'summary', description: 'we start at june 2020, our goal is to make travel easier and more joyful for our client ...'},
      {name: 'services', description: [
        {type: 'booking ticket', summary: 'we help our client to book ticket faster and easier when ever they please', img: Flights},
        {type: 'manage trips', summary: 'we help out clients to manage trips and remind them about thier schedule and flights', img: Manage},
        {type: 'last minute decision', summary: 'we manage any las minute decision like extend trip, end it or reschedule flights', img: LastMinute}
      ]},
      {name: 'staff', description:
        [
          {type: 'ceo', mainImg: MainJohn, summary: 'Mr.John is our founder and the current CEO of this company', img: John},
          {type: 'developers', mainImg: MainMichael, summary:'we have two teams of developer the web team and the app team but they both have on manager Mr.Michael', img: Michael},
          {type: 'customer service', mainImg:MainAshley, summary:'our customer service team handle client request and feedback, the team manager is Mrs.Ashley', img: Ashley}
        ]
      }
    ]
  }
  render(){
    let section = this.state.aboutItems;
    section = section.map(
      (item, index) => {
        return(<AboutItems key={index} name={item.name} description={item.description}/>);
      }
    );

    return(
      <div className='About'>
        <Navbar myPath= 'about'/>
        <div className='banner'>
          <h2>About Us</h2>
        </div>
        {section}
      </div>
    );
  }
}

export default About;