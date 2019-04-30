import React, { Component } from 'react';
import getQueryStrings from '../utils/getQueryStrings';


/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export default class VerifySocialAuthToken extends Component {
  /**
   * @param {function} event
   *  @returns {JSX} jsx
   */
  componentDidMount() {
    const { token } = getQueryStrings(window.location.href);
    localStorage.setItem('authToken', token);
    window.location.replace('/login');
  }

  /**
   * @param {function} event
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}
