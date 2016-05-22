import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src="http://acm.hdu.edu.cn/ccpc-w2016/images/logo2.png" />
        <h1>CCPC-WFinal</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
