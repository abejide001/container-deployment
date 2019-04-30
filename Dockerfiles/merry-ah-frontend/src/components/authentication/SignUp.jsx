import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../actions/authActions';
import Notify from "../../utils/Notify";
import validatePassword from "../../utils/validatePassword";

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export class SignUp extends Component {
  state = {
    firstName:'',
    lastName:'',
    username:'',
    email: '',
    confirm_email: '',
    password: '',
    userType: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      confirm_email: this.state.confirm_email,
      userType: this.state.userType,
    };

    if (!validatePassword(userData.password)){
      Notify.notifyError('Please use a stronger password that contains a number and is 5 letters long');
    }
    else {
      if (userData.email === userData.confirm_email) {
        this.props.signUp(userData, this.props.history);
      } else {
        Notify.notifyError('Emails do not match. Try again');
      }
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <div id="page-background">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">&nbsp;</div>

            <div className="col-md-4 mt-4 col-sm-12" id="auth-background">
              <div className="row">
                <ul className="nav nav-pills mb-3 w-100 text-center" id="pills-tab" role="tablist">
                  <li className="nav-item col-sm-12 p-0">
                    <h5 className="nav-link text-poppins text-left" id="pills-home-tab" aria-selected="true">SignUp</h5>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="pills-tabContent">

                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-home-tab">

                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input type="text" placeholder="Firstname" className="my-form-control firstName"
                             name="firstName" required={true}
                             onChange={this.handleChange}
                             value={this.state.firstName}
                      />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Lastname" className="my-form-control"
                             name="lastName" required={true}
                             onChange={this.handleChange}
                             value={this.state.lastName}/>
                    </div>

                    <div className="form-group">
                      <input type="text" placeholder="Username" className="my-form-control"
                             name="username" required={true}
                             onChange={this.handleChange}
                             value={this.state.username}/>
                    </div>

                    <div className="form-group">
                      <input type="email" placeholder="Email" className="my-form-control"
                             name="email" required={true}
                             onChange={this.handleChange}
                             value={this.state.email}
                      />
                    </div>

                    <div className="form-group">
                      <input type="email" placeholder="Confirm Email" className="my-form-control"
                             name="confirm_email" required={true}
                             onChange={this.handleChange}
                             value={this.state.confirm_email}
                      />
                    </div>

                    <div className="form-group">
                      <input type="password" placeholder="Password" className="my-form-control"
                             name="password" required={true}
                             onChange={this.handleChange}
                             value={this.state.password}
                      />
                    </div>

                    <div className='form-group text-light text-poppins pl-4'>
                      <label className="form-check-label">Select a User Account Type</label>
                      <div className="form-check">
                        <input type="radio" value="artist" className="form-check-input"
                               name="userType" required={true}
                               onChange={this.handleChange}/>

                        <label className="form-check-label">Artist</label>
                      </div>

                      <div className="form-check">
                        <input type="radio" value="user" className="form-check-input"
                               name="userType"
                               onChange={this.handleChange}/>

                        <label className="form-check-label">User</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary w-100"
                        disabled={this.props.auth.isLoading}>
                        {this.props.auth.isLoading ? 'Loading...' : 'Proceed'}
                      </button>
                    </div>
                  </form>

                  <p className="text-light text-center">Sign up with Social</p>
                </div>


                <div className="row pb-3">
                  <div className="col-4 offset-4 text-right d-inline-flex pl-2 pr-2">
                    <div className="auth-icons facebook-square mr-1">&nbsp;</div>
                    <div className="auth-icons twitter-square mr-1">&nbsp;</div>
                    <div className="auth-icons google-plus-square">&nbsp;</div>
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
  SignUp.propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    signUp: PropTypes.func.isRequired,
  };
  export const mapStateToProps = state => ({
    auth: state.auth,
  });

  export default connect(mapStateToProps, { signUp })(withRouter(SignUp));
