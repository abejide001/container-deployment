/* eslint-disable camelcase */
import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jwt_decode from 'jwt-decode';
import moxios from 'moxios';
import Axios from 'axios';
import localStorageMock from '../__mocks__/localStorageMock';
import {loginMockData as mockData, signUpMockData} from '../__mocks__/userMock';
import { SET_CURRENT_USER, SET_USER_ERROR } from '../../actions/types';
import {
  setCurrentUser, setUserRequest, setUserError, loginUser,
} from '../../actions/authActions';
import basePath from '../../utils/basePath';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
window.localStorage = localStorageMock;
let store;

beforeEach(() => {
  moxios.install();
  store = mockStore({});
});
afterEach(() => moxios.uninstall());

it('creates SET_USER_REQUEST', async () => {
  const action = await store.dispatch(setUserRequest());
  expect(store.getActions()[0].type).toEqual(action.type);
});

it('creates SET_CURRENT_USER', async (done) => {
  const { authResponse } = mockData;
  moxios.stubRequest(`${basePath}/api/v1/auth/signin`, {
    status: 200,
    response: authResponse,
  });
  const expectedActions = { type: SET_CURRENT_USER };
  const user = jwt_decode(authResponse.data.token);
  localStorageMock.setItem('authToken', authResponse.data.token);
  await store.dispatch(setCurrentUser(user));
  expect(store.getActions()[0].type).toEqual(expectedActions.type);
  done();
});
it('vra', (done) => {
  const { authResponse, signinData } = mockData;
  moxios.stubRequest(`${basePath}/api/v1/auth/signin`, {
    status: 200,
    response: authResponse,
  });
  const expectedActions = [{
    type: SET_CURRENT_USER,
    user: jwt_decode(authResponse.data.token),
  }];
  Axios.post(`${basePath}/api/v1/auth/signin`, signinData)
    .then(res => expect(authResponse.data.token).toBe(res.data.data.token));
  store.dispatch(loginUser(signinData));
  expect(authResponse.data.token).toBeTruthy();
  expect(expectedActions[0].user.userEmail).toEqual(signinData.email);
  done();
});
it('creates SET_USER_ERROR', async () => {
  moxios.stubRequest(`${basePath}/api/v1/auth/signin`, {
    status: 400,
    response: {
      status: 'Bad Request',
      code: 400,
      messages: 'Invalid Credentials',
    },
  });
  const expectedActions = { type: SET_USER_ERROR };
  await store.dispatch(setUserError('holy moly'));
  expect(store.getActions()[0].type).toEqual(expectedActions.type);
  expect(store.getActions()[0].payload).toEqual('holy moly');
});



it('creates SET_USER_REQUEST on signup', async () => {
  const action = await store.dispatch(setUserRequest());
  expect(store.getActions()[0].type).toEqual(action.type);
});

it('creates SET_CURRENT_USER on signup', async (done) => {
  const { authResponse } = signUpMockData;
  moxios.stubRequest(`${basePath}/api/v1/auth/signup`, {
    status: 201,
    response: authResponse,
  });
  const expectedActions = { type: SET_CURRENT_USER };
  const user = jwt_decode(authResponse.data.token);
  localStorageMock.setItem('authToken', authResponse.data.token);
  await store.dispatch(setCurrentUser(user));
  expect(store.getActions()[0].type).toEqual(expectedActions.type);
  done();
});

it('Simulate Sign up', (done) => {
  const { authResponse, signUpData } = signUpMockData;
  moxios.stubRequest(`${basePath}/api/v1/auth/signup`, {
    status: 201,
    response: authResponse,
  });
  const expectedActions = [{
    type: SET_CURRENT_USER,
    user: jwt_decode(authResponse.data.token),
  }];
  Axios.post(`${basePath}/api/v1/auth/signup`, signUpData)
    .then(res => expect(authResponse.data.token).toBe(res.data.data.token));
  store.dispatch(loginUser(signUpData));
  expect(authResponse.data.token).toBeTruthy();
  expect(expectedActions[0].user.registeredEmail).toEqual(signUpData.email);
  done();
});



it('creates SET_USER_ERROR on signup', async () => {
  moxios.stubRequest(`${basePath}/api/v1/auth/signup`, {
    status: 400,
    response: {
      status: 'Bad Request',
      messages: 'Invalid Credentials',
    },
  });
  const expectedActions = { type: SET_USER_ERROR };
  await store.dispatch(setUserError('Init...'));
  expect(store.getActions()[0].type).toEqual(expectedActions.type);
  expect(store.getActions()[0].payload).toEqual('Init...');
});
