import artReducer from '../../reducers/artReducer';
import {
  GET_CATEGORIES_FILES, SET_FILE_ERROR
} from '../../actions/types';
import {createArt} from '../__mocks__/createArtMock';

it('should handle type GET_CATEGORIES_FILES', () => {
  const action = {
    type: GET_CATEGORIES_FILES,
    payload: createArt.allCategories,
  };
  const newState = artReducer({}, action);
  expect(newState.categories.length).toEqual(6);
});


it('should handle type SET_FILE_ERROR', () => {
  const action = {
    type: SET_FILE_ERROR,
    payload: {
      error: 'err message',
    },
  };
  const newState = artReducer({}, action);

  expect(newState.error.error).toEqual(action.payload.error);
});


it('should handle type default', () => {
  const action = {};
  const newState = artReducer(null, action);
  expect(newState).toEqual(null);
});
