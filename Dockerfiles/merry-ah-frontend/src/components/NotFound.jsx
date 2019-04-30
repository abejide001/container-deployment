import React from 'react';
import PropTypes from 'prop-types';


const NotFound = ({ location }) => (
    <div>
        <h3>
        Specified route does not exist  <code>{location.pathname}</code></h3>
    </div>
);
NotFound.propTypes = {
  location: PropTypes.object.isRequired,
};
export default NotFound;
