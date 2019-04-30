import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  SET_INIT_SLIDE,
  SET_NEXT_SLIDE,
  SET_PREVIOUS_SLIDE,
} from '../../actions/types';
import {
  setInitData,
  previousSlide,
  nextSlide,
  initSlide,
} from '../../actions/featureActions';

it('should return action and payload for SET_INIT_SLIDE', () => {
  const payload = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
    ],
    activeList: [],
  };
  const actionResponse = initSlide(payload);
  expect(actionResponse.type).toEqual(SET_INIT_SLIDE);
  expect(actionResponse.payload.artList.length).toEqual(payload.artList.length);
  expect(
    actionResponse
      .payload
      .activeList
      .length,
  ).toEqual(payload.activeList.length);
});

it('should return action and payload for SET_NEXT_SLIDE', () => {
  const payload = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
    ],
    activeList: [],
  };
  const actionResponse = nextSlide(payload);
  expect(actionResponse.type).toEqual(SET_NEXT_SLIDE);
  expect(actionResponse.payload.artList.length).toEqual(payload.artList.length);
  expect(
    actionResponse
      .payload
      .activeList
      .length,
  ).toEqual(payload.activeList.length);
});

it('should return action and payload for SET_PREVIOUS_SLIDE', () => {
  const payload = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
    ],
    activeList: [],
  };
  const actionResponse = previousSlide(payload);
  expect(actionResponse.type).toEqual(SET_PREVIOUS_SLIDE);
  expect(actionResponse.payload.artList.length).toEqual(payload.artList.length);
  expect(
    actionResponse
      .payload
      .activeList
      .length,
  ).toEqual(payload.activeList.length);
});

it('sets SET_INIT_SLIDE', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});
  const action = store.dispatch(setInitData());
  expect(store.getActions()[0].type).toEqual(action.type);
});