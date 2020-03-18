import React, { Component } from 'react';
import logo from './../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header cf">
        <div className="headerInner">
          <div className="flt_left">
            <h1 className="logo">
              <img src={logo} alt="Mercy" width="142" />
              <span className="_skip">Mercy</span>
            </h1>
          </div>
          <Nav />
        </div>
      </header>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <nav id="nav" className="flt_right">
        <ul className="cf navMenu">
          <li>
            <a href="/">SHOP</a>
          </li>
          <li>
            <a href="/">BRAND</a>
          </li>
          <li>
            <a href="/">BLOG</a>
          </li>
          <li>
            <a href="/">NOTICE</a>
          </li>
          <li>
            <a href="/">REVIEW</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
