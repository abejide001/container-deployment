import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './components/Routes.jsx';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';

/**
 * App Component
 */
export default class App extends Component {
  /**
 * @param {object} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <Routes/>
          <Footer/>
        </div>
      </Router>
    );
  }
}
