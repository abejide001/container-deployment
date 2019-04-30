import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ direction, clickFunction }) => {
  return (<div className='slide-arrow' onClick={clickFunction}>
    <i className={`fa fa-caret-${direction} fa-5x`}></i>
</div>);
};

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired,
};

export default Arrow;
