import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio-container';
import ContactContainer from './contact';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Michael Di Dia's React Portfolio</h1>
        <PortfolioContainer />
        <ContactContainer />
       <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
       </div>
      </div>
    );
  }
}
