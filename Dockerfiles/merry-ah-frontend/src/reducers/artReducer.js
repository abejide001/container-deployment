import {
  SET_USER_REQUEST,GET_CATEGORIES_FILES, SET_FILE_ERROR
} from '../actions/types';

const initialState = {
  categories:[],
  error: ''
};


function artReducer(state = initialState, action) {
  switch (action.type) {

    case GET_CATEGORIES_FILES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_FILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
export default artReducer;


