import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeatureCard from './FeatureCard.jsx';
import Arrow from './FeatureArrow.jsx';
import {
  nextSlide,
  previousSlide,
  setInitData,
} from '../actions/featureActions';

/**
 * @param {class} component
 *  @returns {JSX} jsx
 */
export class FeaturedArts extends Component {
  /**
   * @description handles state change
     * @returns {state} current state
     */
  componentDidMount() {
    this.props.setInitData();
    setInterval(this.props.nextSlide, 5000);
  }

  /**
   * @description handles the generatrion of cards
     * @returns {jsx} for cards
     */
  generateCards() {
    const { activeList } = this.props.data;

    return activeList.map(
      (item, index) => <FeatureCard
        key={item.objectID}
        activeClass={
          index === 1 ? 'cards_active' : 'cards_inactive'}
        title={item.title} imgUrl={item.url} />,
    );
  }

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <div>
      <div id="feature_list">
        <div id="featured_arts_header">
          <h5>Featured Arts</h5>
          <hr/>
        </div>
        {
          this.generateCards()
        }
        <div id="carousel_control">
          <Arrow
            className="slide-arrow"
            clickFunction={ this.props.previousSlide }
            direction="left" />
          <Arrow
            className="slide-arrow"
            clickFunction={ this.props.nextSlide }
            direction="right" />
        </div>
      </div>
      </div>
    );
  }
}

FeaturedArts.propTypes = {
  data: PropTypes.object.isRequired,
  activeList: PropTypes.array.isRequired,
  setInitData: PropTypes.func.isRequired,
  previousSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

/**
 * @param {object} state
 *  @returns {object} object
 */
export const mapStateToProps = state => ({ data: state.featureReducer });

export default connect(
  mapStateToProps,
  { setInitData, nextSlide, previousSlide },
)(FeaturedArts);
