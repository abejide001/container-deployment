import axios from 'axios';
import {
  BOOKMARK_ART_FAILURE, BOOKMARK_ART_REQUEST, BOOKMARK_ART_SUCCESS,
} from './types';
import { basePath } from '../utils/basePath';
import setHeader from '../utils/setHeader';

const bookmarkArtRequest = () => ({
  type: BOOKMARK_ART_REQUEST,
});

const bookmartArtSuccess = bookmarks => ({
  type: BOOKMARK_ART_SUCCESS,
  payload: bookmarks,
});

const bookmarkArtFailure = error => ({
  type: BOOKMARK_ART_FAILURE,
  payload: error,
});

export const getBookmarkArt = () => async (dispatch) => {
  setHeader();
  dispatch(bookmarkArtRequest());
  try {
    const res = await axios.get(`${basePath}/bookmark`);
    dispatch(bookmartArtSuccess(res.data));
  } catch (err) {
    dispatch(bookmarkArtFailure(err.response.data));
  }
};
