import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import Logo from './Logo.jsx';

/**
 * Menu Component
 * @param {func} auth
 * @returns {JSX} JSX
 */
export class Menu extends Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  headerLinks = (currentUser) => {
    const {isAuthenticated} = currentUser;

    let links;
    if (!isAuthenticated) {
      links = (
        <React.Fragment>
          <li className="nav-item offset-md-5">
            <NavLink to="/login" >Login</NavLink>
          </li>
          <li className="nav-item offset-md-5">
            <NavLink to="/register" >Register</NavLink>
          </li>
        </React.Fragment>);
    } else {
      const { user} = currentUser;
      const { userType} = user;
      links = (
        <React.Fragment>
          <li className="nav-item">
            <NavLink to="/notify" ><i className="fa fa-bell m-3"> </i></NavLink>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link d-inline-flex text-capitalize" href="#" id="navbarDropdown"
               role="button" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false"> {user.registeredUsername || user.username}<i className='fa fa-caret-down m-2'/>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink to="/profile" className="dropdown-item">My Profile</NavLink>
              <NavLink to="/create-art" className={`dropdown-item ${userType === 'artist' ? '' : 'd-none'}`}>Create Art</NavLink>
              <div className="dropdown-divider"/>
              <NavLink to="/arts" onClick={this.handleLogout} id="nav-link" className="dropdown-item">logout</NavLink>
            </div>
          </li>
        </React.Fragment>);
    }
    return links;
  }

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <nav id="nav" className="navbar navbar-expand-lg bg-light w-100 my-nav-style">
        <Logo/>
        <button
          className="navbar-toggler pull-right"
          type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon"><i className="fa fa-bars"> </i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search/>
          <ul className="navbar-nav mr-auto offset-1 offset-md-2">
            {this.headerLinks(this.props.auth)}
          </ul>
        </div>
      </nav>
    );
  }
}
Menu.propTypes = {
  auth: PropTypes.object.isRequired,
};
export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Menu);
