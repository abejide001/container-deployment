import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getBookmarkArt } from '../actions/bookmarkActions';

/** Bookmark Component */
export class BookmarkArt extends Component {
  /**
   * @description fetch bookmark arts when the component
   * is already mounted on the DOM
   * @returns {method} returns the getBookmarkArt method
   */
  componentDidMount() {
    this.props.getBookmarkArt();
  }

  /**
   * @method renderBookmarkArt
   * @description render the bookmark arts
   * @return {JSX} jsx
   */
  renderBookmartArt() {
    if (this.props.bookmark.isFetching) {
      return <p>Loading Bookmarks....</p>;
    }
    if (this.props.bookmark.bookmarks.data.length === 0) {
      return <p>User has 0 bookmark</p>;
    }
    return (
      <div>
        {this.props.bookmark.bookmarks.data.map(bookmark => (
          <div className="container" key={bookmark.id}>
            <div className="row" id="bookmark-list">
              <p className="bookmark-header col-12">Bookmark Arts</p>
              <div className="col-3">
                <div
                  className="my-card"
                  style={{
                    backgroundImage: `url(${bookmark.Art.featuredImg})`,
                  }}
                >
                  <div className="card-category">Poetry</div>
                  <div className="card-container">
                    <div className="card-title">
                      <h6>
                        {' '}
                        <Link to={`/arts/${bookmark.Art.slug}`}>
                          {bookmark.Art.title}
                        </Link>{' '}
                      </h6>
                      <p>{bookmark.Art.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /**
   * @method render
   * @description renders the bookmark
   * @return {method} return the render bookmark method
   */
  render() {
    return (
      <div className="container">
        <div className="bookmark">{this.renderBookmartArt()}</div>
      </div>
    );
  }
}
BookmarkArt.propTypes = {
  getBookmarkArt: PropTypes.func.isRequired,
  bookmark: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    bookmarks: PropTypes.array.isRequired,
  }),
};
const mapStateToProps = state => ({
  bookmark: state.bookmark,
});
export default connect(
  mapStateToProps,
  { getBookmarkArt },
)(BookmarkArt);
