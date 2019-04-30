import axios from 'axios';
import dotenv from 'dotenv';
import {
  GET_CATEGORIES_FILES,
  SET_FILE_ERROR,SET_UPLOAD_SUCCESS
} from './types';

dotenv.config();
const { CLOUDINARY_API } = process.env;
import Notify from '../utils/Notify';
import { basePath } from '../utils/basePath';

export const setCategories = (payload) => ({
  type: GET_CATEGORIES_FILES,
  payload
});

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(`${basePath}/categories`);
    dispatch(setCategories(categories.data.data.categories.rows));
  } catch (e) {
    console.log(e.response);
  }
};

export const setUploadSuccess = () => ({
  type: SET_UPLOAD_SUCCESS,
});

export const setFileError = error => ({
  type: SET_FILE_ERROR,
  payload: error,
});

export const handleUploadImages = (payload) => async (dispatch) =>  {
  let imageURLs = [];
  dispatch(setUploadSuccess());

  const {files: images} = payload;

  const uploads = await images.map(async (image)=> {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "artcave_articles"); // Replace the preset name with your own
    formData.append("api_key", `${CLOUDINARY_API}`); // Replace API key with your own Cloudinary API key
    formData.append("timestamp", (Date.now() / 1000) | 0);

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/wombolo/image/upload",
      formData,
      { headers: { "X-Requested-With": "XMLHttpRequest" }});

    imageURLs.push({
      url: response.data.secure_url,
      extension: response.data.format,
    });
    return imageURLs;
  });

  const mediaFiles = await axios.all(uploads);

  try {
    payload.files =  [];
    const postToBackEnd = await axios.post(
      `${basePath}/arts/`,
      {
        ...payload,
        media: JSON.stringify(mediaFiles[0])
      },
      { headers: {
          "Content-Type": "application/json",
          "x-access-token": payload.accessToken
        }});
    window.location.replace(`/arts/${postToBackEnd.data.data.slugifiedTitle}`);
  }
  catch (error) {
    const errMessage = `${error.response.data.messages}. Try Again`;
    dispatch(setFileError(errMessage));
    Notify.notifyError(errMessage)
  }
};
