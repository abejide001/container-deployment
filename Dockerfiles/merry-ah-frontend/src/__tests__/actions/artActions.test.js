import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import localStorageMock from '../__mocks__/localStorageMock';
import {createArt} from '../__mocks__/createArtMock';
import {
  setCategories, getCategories, handleUploadImages
} from '../../actions/artActions';
import { SET_UPLOAD_SUCCESS } from '../../actions/types';
import { basePath } from '../../utils/basePath';
import sinon from 'sinon';

sinon.stub(window.location, 'replace');
const mockStore = configureMockStore([thunk]);
window.localStorage = localStorageMock;
let store;

const uploadPayload = {
  categoryId: 1,
  description: "qwert",
  price: 0,
  title: "123",
  files: [ createArt.image1],
};

describe('Art actions', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => moxios.uninstall());

  it('creates GET_CATEGORIES_FILES', async () => {
    const action = store.dispatch(setCategories(store.dispatch(getCategories())));
    expect(store.getActions()[0].type).toEqual(action.type);
  });

  it('creates SET_UPLOAD_SUCCESS action', async (done) => {
    moxios.stubRequest(`https://api.cloudinary.com/v1_1/wombolo/image/upload`, {
      status: 201,
    });

    moxios.wait(() => {
      moxios.stubRequest(`${basePath}/arts`, {
        status: 'Ok',
        code: 201,
        messages: 'Article created successfully',
        data:
          { artId: 35,
            artTitle: 'Syntax Podcasts',
            slugifiedTitle: 'syntax-podcasts-4gl0se',
            artDescription: 'The Syntax Podcasts isn\'t suitable for all ages',
            artFeaturedImg:
              'https://farm3.staticflickr.com/2817/33968464326_a6f9cbc754_k',
            artCategoryId: 1,
            visited: 0,
            followersNotified: 'Message sent' } }
      );

      const expectedActions = [{ type: SET_UPLOAD_SUCCESS}];
      store.dispatch(handleUploadImages(uploadPayload));
      expect(store.getActions()).toEqual(expectedActions);
      done()
    });

  });
});
