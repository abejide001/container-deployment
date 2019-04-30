import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import painting from '../assets/images/painting.jpg';
import sketch from '../assets/images/sketch.jpg';
import mosaic from '../assets/images/mosaic.jpg';
import sculpture from '../assets/images/sculpture.jpg';
import architecture from '../assets/images/architecture.jpg';
import poetry from '../assets/images/poetry.jpg';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export default class Categories extends Component {
  /**
   * @param {object} props
   *  @returns {JSX} jsx
   */
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        {
          objectID: 1,
          url: painting,
          title: 'PAINTING',
          category: 'painting',
        },
        {
          objectID: 2,
          url: sketch,
          title: 'FREEHAND SKETCH',
          category: 'freehand_sketch',
        },
        {
          objectID: 3,
          url: mosaic,
          title: 'MOSAIC',
          category: 'mosaic',
        },
        {
          objectID: 4,
          url: sculpture,
          title: 'SCULPTURE',
          category: 'sculpture',
        },
        {
          objectID: 5,
          url: architecture,
          title: 'ARCHITECTURE',
          category: 'architecture',
        },
        {
          objectID: 6,
          url: poetry,
          title: 'POETRY',
          category: 'poetry',
        },
      ],
    };
  }

  /**
     * @param {function} render
     *  @returns {JSX} jsx
     */
  render() {
    return (
      <section id="categories">
        <div>
          {
            this.state.categoryList.map(
              item => <div id="category" className="image"
                key={item.objectID}
                style={
                  {
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)),
                            url(${item.url}) no-repeat center `,
                    backgroundSize: 'cover',
                  }
                }>
                <div className="overlay">
                  <span>
                    <div id="category_link">
                      <Link to={`/art/${item.category}`}>{item.title}</Link>
                    </div>
                  </span>
                </div>
              </div>,
            )
          }
        </div>
      </section>
    );
  }
}
