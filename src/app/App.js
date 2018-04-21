import React, { Component } from 'react';
import Routes from '../routes/Routes'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Navigation from './layout/navigation/Navigation'
import './App.css'
import Contacts from './layout/footer/components/Contacts'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <Header />
          </header>
          <div className="app-background-color">
            <nav>
              <Navigation />
            </nav>
            <div className="container">
              <div>
                <Routes />
              </div>
              <div id="mybutton">
                <button className="feedback"><Contacts /></button>
              </div>
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
