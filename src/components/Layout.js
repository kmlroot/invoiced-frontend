import React, { Component } from 'react';
import Contact from './Contact';

import data from './data';

class Layout extends Component {
  addContact = (event) => {
    event.preventDefault();
    console.log('Click');
  }

  render() {
    return (
      <div id='Layout'>
        <a href='#' className='pure-button' onClick={this.addContact}> Add contact </a>
        <div className='pure-g'>
          {data.map(info => <Contact key={info.id} {...info} />)}
        </div>
      </div>
    );
  }
}

export default Layout;
