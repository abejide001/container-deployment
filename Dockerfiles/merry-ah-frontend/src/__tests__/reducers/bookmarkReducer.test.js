import bookmarkReducer from '../../reducers/bookmarkReducer';
import * as actionTypes from '../../actions/types';

describe('Bookmark Reducer', () => {
  it('should handle action BOOKMARK ART REQUEST', () => {
    const action = {
      type: actionTypes.BOOKMARK_ART_REQUEST,
    };
    const newState = bookmarkReducer({}, action);
    expect(newState).toEqual({
      isFetching: true,
    });
  });
  it('should handle action BOOKMARK ART ERROR', () => {
    const action = {
      type: actionTypes.BOOKMARK_ART_FAILURE,
      error: 'error',
    };
    const newState = bookmarkReducer({}, action);
    expect(newState.isFetching).toEqual(false);
  });
  it('should handle action BOOKMARK ART SUCCESS', () => {
    const action = {
      type: actionTypes.BOOKMARK_ART_SUCCESS,
      payload: [],
    };
    const newState = bookmarkReducer({}, action);
    expect(newState.bookmarks).toEqual([]);
  });
});
