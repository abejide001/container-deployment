import axios from 'axios';

/**
 * @method setHeader
 * @description sets authorization header with user's token
 * @param {object} response The HTTP response
 *
 * @returns {void}
 */
const setHeader = () => {
  axios.defaults.headers
    .common.Authorization = `${localStorage.getItem('authToken')}`;
};

export default setHeader;
