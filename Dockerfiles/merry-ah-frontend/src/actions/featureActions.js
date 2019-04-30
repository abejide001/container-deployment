import {
  SET_INIT_SLIDE,
  SET_NEXT_SLIDE,
  SET_PREVIOUS_SLIDE,
} from './types';
import sampleImage1 from '../assets/images/1.jpg';
import sampleImage2 from '../assets/images/2.jpg';
import sampleImage3 from '../assets/images/3.jpg';
import sampleImage4 from '../assets/images/4.jpg';
import sampleImage5 from '../assets/images/5.jpg';
import sampleImage6 from '../assets/images/6.jpg';
import sampleImage7 from '../assets/images/7.jpg';
import sampleImage8 from '../assets/images/8.jpg';
import sampleImage9 from '../assets/images/9.jpg';

/**
 * @param {function} payload
 *  @returns {Object} action obj
 */
export function initSlide(payload) {
  return { type: SET_INIT_SLIDE, payload };
}

/**
 * @param {function} payload
 *  @returns {Object} action obj
 */
export function nextSlide(payload) {
  return { type: SET_NEXT_SLIDE, payload };
}

/**
 * @param {function} payload
 *  @returns {Object} action obj
 */
export function previousSlide(payload) {
  return { type: SET_PREVIOUS_SLIDE, payload };
}


export const setInitData = () => {
  const demoData = {
    artList: [
      {
        objectID: 1,
        url: sampleImage1,
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: sampleImage2,
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: sampleImage3,
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
      {
        objectID: 4,
        url: sampleImage4,
        title: 'How to have a blast',
        category: 'mosaic',
      },
      {
        objectID: 5,
        url: sampleImage5,
        title: 'Debugging best practices',
        category: 'mosaic',
      },
      {
        objectID: 6,
        url: sampleImage6,
        title: 'Fast and furious remake',
        category: 'mosaic',
      },
      {
        objectID: 7,
        url: sampleImage7,
        title: 'Best Coder alive',
        category: 'mosaic',
      },
      {
        objectID: 8,
        url: sampleImage8,
        title: 'Fifa e-world cup',
        category: 'mosaic',
      },
      {
        objectID: 9,
        url: sampleImage9,
        title: 'Perfection at its peak',
        category: 'mosaic',
      },
    ],
    activeList: [],
  };
  return initSlide(demoData);
};
