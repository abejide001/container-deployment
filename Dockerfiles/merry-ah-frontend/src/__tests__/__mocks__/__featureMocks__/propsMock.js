import {
  nextSlide,
  previousSlide,
  setInitData,
} from '../../../actions/featureActions';

const props = {
  data: {
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
  },
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
  setInitData: () => setInitData,
  previousSlide: () => previousSlide,
  nextSlide: () => nextSlide,
};
export default props;
