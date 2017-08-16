import React, { Component } from 'react';
import Contact from './Contact';

import data from './data';

class Layout extends Component {
  componentWillMount () {
    this.setState({
      contacts: data,
    })
  }

  addContact = (event) => {
    event.preventDefault();

    const contacts = this.state.contacts;
    const newId = contacts[contacts.length - 1].id + 1;

    this.setState({
      contacts: contacts.concat({ 
        id: newId,
        name: `New contact ${newId}`, 
        email: `${newId}@exampe.com`
      })
    });
  }

  render() {
    return (
      <div id='Layout'>
        <a className='pure-button' onClick={this.addContact}> Add contact </a>
        <div className='pure-g'>
          {this.state.contacts.map(info => <Contact key={info.id} {...info} />)}
        </div>
      </div>
    );
  }
}

export default Layout;
