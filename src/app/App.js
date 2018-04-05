import React, { Component } from 'react';
import Routes from '../routes/Routes'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Navigation from './layout/navigation/Navigation'
import './App.css'

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
