import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Contact = (props) => {
  return (
    <div className='contact pure-u-1-3'>
      <h2>
      	<Link to={`/contacts/${props.id}`}>{props.name}</Link>
      	</h2>
      <p>{props.email}</p>
    </div>
  )
}

export default Contact;
