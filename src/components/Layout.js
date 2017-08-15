import React, { Component } from 'react';

const Contact = () => {
  return (
    <div className='pure-u-1-3'>
      <h2>Mauricio Serna F</h2>
      <p>mauricioserf@gmail.com</p>
    </div>
  )
}

class Layout extends Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
        <Contact />
        <Contact />
        <Contact />
      </div>
    );
  }
}

export default Layout;
