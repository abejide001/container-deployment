import React, { Component } from 'react';

/**
     * @param {function} render
     *  @returns {JSX} jsx
     */
export default class Footer extends Component {
  /**
     * @param {function} render
     *  @returns {JSX} jsx
     */
  render() {
    return (
      <footer>
      <div>
        <div className="row">
        <div className="col-lg-3 col-sm-12 float-left pull-left text-center">
          <li><p>&copy; 2019 All Rights Reserved</p></li>
        </div>
          <div className={'col-lg-7'}> </div>
        <div className="col-lg-2 col-sm-12 pull-right text-center">
          <ul>
            <li><a href="#"><i className="fa fa-facebook-f"> </i></a></li>
            <li><a href="#"><i className="fa fa-twitter"> </i></a></li>
            <li><a href="#"><i className="fa fa-instagram"> </i></a></li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
    );
  }
}
