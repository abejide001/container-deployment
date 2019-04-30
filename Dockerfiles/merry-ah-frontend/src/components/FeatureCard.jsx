import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureButton from './FeatureButton.jsx';

const FeatureCard = ({ imgUrl, title, activeClass }) => (
  <div id="cards" className={activeClass} style={
    {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), 
                    rgba(0, 0, 0, 0.5)), url(${imgUrl}) no-repeat center `,
      backgroundSize: 'cover',
    }
  }>
    <div id="feature_button_div">
      <h5>{title}</h5>
      <FeatureButton
        text="View"
        myclass={
          activeClass === 'card_active' ? 'feature_button' : 'feature_button_inactive'
          } />
    </div>
  </div>
);

FeatureCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
};

export default FeatureCard;
