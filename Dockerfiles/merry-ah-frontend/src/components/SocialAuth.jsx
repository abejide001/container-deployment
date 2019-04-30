import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { basePath } from '../utils/basePath';


/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export default class SocialAuth extends Component {
  /**
   * @param {function} event
   *  @returns {JSX} jsx
   */
  render() {
    const { provider, myClass } = this.props;
    return (
      <a href={`${basePath}/auth/${provider}`}>
        <div className={myClass}>&nbsp;</div>
      </a>
    );
  }
}

SocialAuth.propTypes = {
  provider: PropTypes.string.isRequired,
  myClass: PropTypes.string.isRequired,
};
