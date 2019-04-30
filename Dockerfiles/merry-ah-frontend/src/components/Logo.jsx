import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../assets/images/artcave-logo.png';

/**
 * Logo Component
 */
export default class Logo extends Component {
  /**
 * @param {function} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
      <NavLink
      className="navbar-brand col-lg-2 logo pull-left w-50 p-0"
      to="/" id="brand-logo">
        <img alt={'logo'} src={LogoImage} className='w-25' />artCave</NavLink>
    );
  }
}
