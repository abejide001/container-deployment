
import React, { Component } from 'react';
import FeaturedArts from './FeaturedArts.jsx';
import Showcase from './Showcase.jsx';
import Categories from './Categories.jsx';
/**
 * Home Component
 */
export default class Home extends Component {
  /**
 * @param {function} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
        <div>
          <Showcase/>
          <FeaturedArts/>
          <Categories/>
        </div>
    );
  }
}
