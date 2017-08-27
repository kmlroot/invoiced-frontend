import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import './index.css';

@observer(['contacts'])
class Contact extends Component {

  removeContact = (event) => {
    event.preventDefault();
    this.props.contacts.remove(this.props.id);
  }

  render () {
    return (
      <div className='contact pure-u-1-3'>
        <h2>
          <Link to={`/contacts/${this.props.id}`}>{this.props.name}</Link>
          </h2>
        <p>{this.props.email}</p>

        <a href='#'
           className='pure-button removeButton'
           onClick={this.removeContact}> Remove </a>
      </div>
    )
  }
}

export default Contact;
