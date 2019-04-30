/* eslint-disable require-jsdoc */
import {
  BOOKMARK_ART_FAILURE, BOOKMARK_ART_REQUEST, BOOKMARK_ART_SUCCESS,
} from '../actions/types';

const initialState = {
  isFetching: true,
  bookmarks: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case BOOKMARK_ART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case BOOKMARK_ART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        bookmarks: action.payload,
      };
    case BOOKMARK_ART_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
