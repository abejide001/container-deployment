import authReducer from '../../reducers/authReducer';
import {
  SET_CURRENT_USER, SET_USER_ERROR, SET_USER_REQUEST,
} from '../../actions/types';

it('should handle action handle action of type GET_PRODUCTS', () => {
  const action = {
    type: SET_CURRENT_USER,
    payload: {
      email: 'dadadad',
      password: 'musasasa',
      token: '12121212313aa',
    },
  };
  const newState = authReducer({}, action);
  expect(newState.user).toEqual(action.payload);
});
it('should handle type SET_USER_ERROR', () => {
  const action = {
    type: SET_USER_ERROR,
    payload: {
      error: 'lololol',
    },
  };
  const newState = authReducer('', action);
  expect(newState.error.error).toEqual(action.payload.error);
});
it('should handle type SET_USER_REQUEST', () => {
  const action = {
    type: SET_USER_REQUEST,
    payload: {
      isLoading: true,
    },
  };
  const newState = authReducer(false, action);
  expect(newState.isLoading).toBe(true);
});
