import React, { Component } from 'react';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export default class Showcase extends Component {
  /**
   * @param {function} event
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <section id="showcase">
        <div id="showcase_text">
          <div>
            <h1>Bring Unspoken <br></br> Words to Life</h1>
            <div>
              <a href="#">
                <button
                type="button"
                className="showcase_button" >Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
