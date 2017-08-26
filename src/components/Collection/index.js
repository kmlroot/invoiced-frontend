import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Contact from '../Contact/';
import './index.css';

@observer(['contacts'])
class Collection extends Component {

  addContact = (event) => {
    event.preventDefault();

    const contacts = this.props.contacts.all.slice();
    const newId = contacts[contacts.length - 1].id + 1;

    this.props.contacts.add({ 
        id: newId,
        name: this.refs.name.value, 
        email: this.refs.email.value,
    })

    this.refs.name.value = '';
    this.refs.email.value = '';
  }

  newContact = () => {
    return (
      <div className='pure-g'>
        <div className='pure-u-12-24'>
          <form className='pure-form' onSubmit={this.addContact}>
            <fieldset>
              <legend> New contact </legend>

              <input ref='email' type='email' placeholder='example@example.com' />
              <input ref='name' type='text' placeholder='Name' />

              <button type='submit' className='pure-button pure-button-primary'> Sign in </button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id='Collection' className='main'>
        {this.newContact()}
        <div className='pure-g'>
          {this.props.contacts.all.map(info => 
            <Contact key={info.id} {...info} />)
          }
        </div>
      </div>
    );
  }
}

export default Collection;
