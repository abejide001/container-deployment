import React, { Component } from 'react';

/**
 * Search Component
 */
class Search extends Component {
  /**
 * @param {function} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
      <form className="form-inline my-2 my-lg-0 col-md-8">
        <input type="search" placeholder="Search" aria-label="Search for"/>
      </form>
    );
  }
}

export default Search;
