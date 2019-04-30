import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featureReducer from './featureReducer';
import bookmarkReducer from './bookmarkReducer';
import artReducer from './artReducer';

export default combineReducers({
  auth: authReducer,
  bookmark: bookmarkReducer,
  featureReducer,
  artReducer,
});
