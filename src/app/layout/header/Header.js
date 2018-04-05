import React, { Component } from 'react';
import './Header.css'
import logo from '../../../resources/images/logo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="row logo">
          <Link to="/">
            <img src={logo} width="200px" alt="фараимоти" className="img-thumbnail image-background"></img>
          </Link>
        </div>
      </div>
    );
  }
}

