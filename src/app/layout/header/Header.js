import React, { Component } from 'react';
import './Header.css'
import logo from '../../../resources/images/logo.png'
import { Link } from 'react-router-dom'
import Contacts from '../footer/components/Contacts'
import headerImg from '../../../resources/images/header.jpg'

export default class Header extends Component {
  render() {
    return (
      <div style={{backgroundImage: "url(" + headerImg + ")"}}>
        <div className="container">
          <div className="row logo" >
              <Link to="/">
                <img src={logo} width="200px" alt="фараимоти" className="img-thumbnail image-background"></img>
              </Link>
            {/* <div className="col-md-3">
              <Contacts />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

