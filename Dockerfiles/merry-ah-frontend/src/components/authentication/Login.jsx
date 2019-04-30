import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';
import SocialAuth from '../SocialAuth.jsx';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
    this.setState({ [event.target.name]: '' });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    const providers = [
      { id: 1, name: 'facebook', class: 'auth-icons facebook-square mr-1' },
      { id: 2, name: 'twitter', class: 'auth-icons twitter-square mr-1' },
      { id: 3, name: 'google', class: 'auth-icons google-plus-square' }];
    return (
      <div id="page-background">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">&nbsp;</div>

            <div className="col-md-4 mt-4 col-sm-12" id="auth-background">
              <div className="row">
                <ul
                  className="nav nav-pills mb-3 w-100 text-center"
                  id="pills-tab" role="tablist">
                  <li className="nav-item col-sm-12 p-0">
                    <h5
                      className="nav-link text-poppins text-left"
                      id="pills-home-tab"
                      aria-selected="true">Login</h5>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="my-form-control input1"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className="my-form-control input2"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                      />
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary w-100"
                        disabled={this.props.auth.isLoading}>
                        {this.props.auth.isLoading ? 'Loading...' : 'Proceed'}
                      </button>
                    </div>
                  </form>
                  <p>
                    <a href={'#'}
                       className="text-center text-light text-poppins">
                       Forgot Password?</a>
                  </p>

                  <p className="text-center text-light">Login with Social</p>
                </div>
                <div className="row pb-3">
                  <div
                  className="col-4 offset-4 text-right d-inline-flex pl-2 pr-2">
                    {providers.map(provider => <SocialAuth
                      provider={provider.name}
                      key={provider.id}
                      myClass={provider.class}
                    />)
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
