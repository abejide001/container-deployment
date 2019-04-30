import featureReducer from '../../reducers/featureReducer';
import {
  SET_NEXT_SLIDE,
  SET_PREVIOUS_SLIDE,
  SET_INIT_SLIDE,
} from '../../actions/types';

it('should handle action of type SET_INIT_SLIDE', () => {
  const initialState = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
      {
        objectID: 4,
        url: '../assets/images/4.jpg',
        title: 'How to have a blast',
        category: 'mosaic',
      },
      {
        objectID: 5,
        url: '../assets/images/5.jpg',
        title: 'Debugging best practices',
        category: 'mosaic',
      },
      {
        objectID: 6,
        url: '../assets/images/6.jpg',
        title: 'Fast and furious remake',
        category: 'mosaic',
      },
      {
        objectID: 7,
        url: '../assets/images/7.jpg',
        title: 'Best Coder alive',
        category: 'mosaic',
      },
      {
        objectID: 8,
        url: '../assets/images/8.jpg',
        title: 'Fifa e-world cup',
        category: 'mosaic',
      },
      {
        objectID: 9,
        url: '../assets/images/9.jpg',
        title: 'Perfection at its peak',
        category: 'mosaic',
      },
    ],
    activeList: [],
  };
  const action = {
    type: SET_INIT_SLIDE,
    payload: initialState,
  };
  const newState = featureReducer(initialState, action);
  expect(newState.activeList.length).toEqual(3);
});
it('should handle action of type SET_NEXT_SLIDE', () => {
  const initialState = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
      {
        objectID: 4,
        url: '../assets/images/4.jpg',
        title: 'How to have a blast',
        category: 'mosaic',
      },
      {
        objectID: 5,
        url: '../assets/images/5.jpg',
        title: 'Debugging best practices',
        category: 'mosaic',
      },
      {
        objectID: 6,
        url: '../assets/images/6.jpg',
        title: 'Fast and furious remake',
        category: 'mosaic',
      },
      {
        objectID: 7,
        url: '../assets/images/7.jpg',
        title: 'Best Coder alive',
        category: 'mosaic',
      },
      {
        objectID: 8,
        url: '../assets/images/8.jpg',
        title: 'Fifa e-world cup',
        category: 'mosaic',
      },
      {
        objectID: 9,
        url: '../assets/images/9.jpg',
        title: 'Perfection at its peak',
        category: 'mosaic',
      },
    ],
    activeList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
    ],
  };
  const action = {
    type: SET_NEXT_SLIDE,
  };
  const newState = featureReducer(initialState, action);
  expect(newState.activeList.length).toEqual(3);
  expect(newState.activeList[0].objectID).toEqual(2);
  expect(newState.activeList[0].url).toEqual('../assets/images/2.jpg');
  expect(newState.activeList[0].title).toEqual('Cirrhosis of the sky');
  expect(newState.activeList[0].category).toEqual('freehand_sketch');
});
it('should reset slides if activeList is 2', () => {
  const initialState = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
      {
        objectID: 4,
        url: '../assets/images/4.jpg',
        title: 'How to have a blast',
        category: 'mosaic',
      },
      {
        objectID: 5,
        url: '../assets/images/5.jpg',
        title: 'Debugging best practices',
        category: 'mosaic',
      },
      {
        objectID: 6,
        url: '../assets/images/6.jpg',
        title: 'Fast and furious remake',
        category: 'mosaic',
      },
      {
        objectID: 7,
        url: '../assets/images/7.jpg',
        title: 'Best Coder alive',
        category: 'mosaic',
      },
      {
        objectID: 8,
        url: '../assets/images/8.jpg',
        title: 'Fifa e-world cup',
        category: 'mosaic',
      },
      {
        objectID: 9,
        url: '../assets/images/9.jpg',
        title: 'Perfection at its peak',
        category: 'mosaic',
      },
    ],
    activeList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
    ],
  };
  const action = {
    type: SET_NEXT_SLIDE,
  };
  
  const newState = featureReducer(initialState, action);
  expect(initialState.activeList.length).toEqual(2);
  expect(newState.activeList.length).toEqual(3);
  expect(newState.activeList[0]).toEqual(initialState.artList[0]);
  expect(newState.activeList[1]).toEqual(initialState.artList[1]);
  expect(newState.activeList[2]).toEqual(initialState.artList[2]);
});
it('should handle action of type SET_PREVIOUS_SLIDE', () => {
  const initialState = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
      {
        objectID: 4,
        url: '../assets/images/4.jpg',
        title: 'How to have a blast',
        category: 'mosaic',
      },
      {
        objectID: 5,
        url: '../assets/images/5.jpg',
        title: 'Debugging best practices',
        category: 'mosaic',
      },
      {
        objectID: 6,
        url: '../assets/images/6.jpg',
        title: 'Fast and furious remake',
        category: 'mosaic',
      },
      {
        objectID: 7,
        url: '../assets/images/7.jpg',
        title: 'Best Coder alive',
        category: 'mosaic',
      },
      {
        objectID: 8,
        url: '../assets/images/8.jpg',
        title: 'Fifa e-world cup',
        category: 'mosaic',
      },
      {
        objectID: 9,
        url: '../assets/images/9.jpg',
        title: 'Perfection at its peak',
        category: 'mosaic',
      },
    ],
    activeList: [
      {
        objectID: 2,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 3,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 4,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
    ],
  };
  const action = {
    type: SET_PREVIOUS_SLIDE,
  };
  const newState = featureReducer(initialState, action);
  expect(newState.activeList.length).toEqual(3);
  expect(newState.activeList[0]).toEqual(initialState.artList[0]);
});
it('should handle action of type SET_PREVIOUS_SLIDE if at the start', () => {
  const initialState = {
    artList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
      {
        objectID: 4,
        url: '../assets/images/4.jpg',
        title: 'How to have a blast',
        category: 'mosaic',
      },
      {
        objectID: 5,
        url: '../assets/images/5.jpg',
        title: 'Debugging best practices',
        category: 'mosaic',
      },
      {
        objectID: 6,
        url: '../assets/images/6.jpg',
        title: 'Fast and furious remake',
        category: 'mosaic',
      },
      {
        objectID: 7,
        url: '../assets/images/7.jpg',
        title: 'Best Coder alive',
        category: 'mosaic',
      },
      {
        objectID: 8,
        url: '../assets/images/8.jpg',
        title: 'Fifa e-world cup',
        category: 'mosaic',
      },
      {
        objectID: 9,
        url: '../assets/images/9.jpg',
        title: 'Perfection at its peak',
        category: 'mosaic',
      },
    ],
    activeList: [
      {
        objectID: 1,
        url: '../assets/images/1.jpg',
        title: 'Do you love art',
        category: 'painting',
      },
      {
        objectID: 2,
        url: '../assets/images/2.jpg',
        title: 'Cirrhosis of the sky',
        category: 'freehand_sketch',
      },
      {
        objectID: 3,
        url: '../assets/images/3.jpg',
        title: 'Walkers Short Bread',
        category: 'mosaic',
      },
    ],
  };
  const action = {
    type: SET_PREVIOUS_SLIDE,
  };
  const newState = featureReducer(initialState, action);
  expect(newState.activeList.length).toEqual(3);
  expect(newState.activeList[0]).toEqual(initialState.artList[0]);
  expect(newState.activeList[1]).toEqual(initialState.artList[1]);
  expect(newState.activeList[2]).toEqual(initialState.artList[2]);
});
it('should handle action of type INVALID_TYPE', () => {
  const action = {
    type: 'INVALID_TYPE',
  };
  const newState = featureReducer({}, action);
  expect(newState).toEqual({});
});
