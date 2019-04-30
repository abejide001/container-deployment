/* eslint-disable camelcase */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER, SET_USER_REQUEST, SET_USER_ERROR } from './types';
import { basePath } from '../utils/basePath';
import Notify from '../utils/Notify';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});
export const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});
export const setUserError = error => ({
  type: SET_USER_ERROR,
  payload: error,
});
export const loginUser = userData => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await axios.post(`${basePath}/auth/signin`, userData);
    const { token } = res.data.data;
    const decoded = jwt_decode(token);
    localStorage.setItem('authToken', token);
    if (decoded) {
      window.location.replace('/profile');
    }
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch(setUserError(err.response.data.messages));
    Notify.notifyError(err.response.data.messages);
  }
};


export const signUp = (userData, history) => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await axios.post(`${basePath}/auth/signup`, userData);
    const { token } = res.data.data;
    const decoded = jwt_decode(token);
    localStorage.setItem('authToken', token);
    if (decoded) {
      history.push('/profile');
    }
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch(setUserError(err.response.data.messages));
    Notify.notifyError(err.response.data.messages);
  }
};
