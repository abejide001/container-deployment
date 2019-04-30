import React from 'react';
import PropTypes from 'prop-types';

const FeatureButton = ({ text, myclass }) => (<button className={myclass}>
  {text}
</button>);

FeatureButton.propTypes = {
  text: PropTypes.string.isRequired,
  myclass: PropTypes.string.isRequired,
};

export default FeatureButton;
