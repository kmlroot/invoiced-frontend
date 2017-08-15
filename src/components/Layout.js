import React, { Component } from 'react';

const data = [
  { name: 'Mauricio Serna', email: 'mauricioserf@gmail.com' },
  { name: 'Leigh Halliday', email: 'leigh@gmail.com' },
  { name: 'Marian Serna', email: 'marian@gmail.com' }
]

const Contact = (props) => {
  return (
    <div className='pure-u-1-3'>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  )
}

class Layout extends Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
        {data.map((info, key) => <Contact key={key} {...info} /> )}
      </div>
    );
  }
}

export default Layout;
