import React, { Component } from 'react';
import Contact from '../Contact/';
import data from '../data';
import './index.css';

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

  newContact = () => {
    return (
      <div className='pure-g'>
        <div className='pure-u-12-24'>
          <form className='pure-form'>
            <fieldset>
              <legend> New contact </legend>

              <input type='email' placeholder='example@example.com' />
              <input type='text' placeholder='Name' />

              <button type='submit' className='pure-button pure-button-primary'> Sign in </button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id='Layout'>
        {this.newContact()}
        <div className='pure-g'>
          {this.state.contacts.map(info => <Contact key={info.id} {...info} />)}
        </div>
      </div>
    );
  }
}

export default Layout;
