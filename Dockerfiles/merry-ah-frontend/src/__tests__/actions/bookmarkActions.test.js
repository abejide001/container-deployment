
import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as actionTypes from '../../actions/types';
import { getBookmarkArt } from '../../actions/bookmarkActions';


describe('Book actions', () => {
  const mockStore = configureStore([thunk]);
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it(
    'should dispatch BOOKMARK_ART_REQUEST and BOOKMARK_ART_SUCCESS', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: [],
        });
      });
      const expectedActions = [{
        type: actionTypes.BOOKMARK_ART_REQUEST,
      }, {
        type: actionTypes.BOOKMARK_ART_SUCCESS,
        payload: [],
      },
      ];
      const store = mockStore({});
      return store.dispatch(getBookmarkArt())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    },
  );
  it(
    'should dispatch BOOKMARK_ART_REQUEST and BOOKMARK_ART_FAILURE', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: {
            messages: 'No Bookmarks was found for User',
          },
        });
      });
      const expectedActions = [{
        type: actionTypes.BOOKMARK_ART_REQUEST,
      }, {
        type: actionTypes.BOOKMARK_ART_FAILURE,
        payload: {
          messages: 'No Bookmarks was found for User',
        },
      },
      ];
      const store = mockStore({});
      return store.dispatch(getBookmarkArt())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    },
  );
});
