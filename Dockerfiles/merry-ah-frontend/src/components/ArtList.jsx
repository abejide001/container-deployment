import React, { Component } from 'react';
import card1 from '../assets/images/card1.jpeg';
import star from '../assets/images/star.png';
import emptyStar from '../assets/images/empty-star.png';
import like from '../assets/images/like.png';
import comment from '../assets/images/comment.png';
/**
 * ArtList Component
 */
class ArtList extends Component {
  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <div className="row" id="art-list">
        <p className="profile-header col-12">My Works</p>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
        <div className="col-3">
          <div
            className="my-card"
            style={{
              backgroundImage: `url(${card1})`,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="card-category">Poetry</div>
            <div className="card-container">
              <div className="card-title">
                <h6>
                  {' '}
                  <a href=""> An Artist’s Discovery</a>{' '}
                </h6>
                <p>An Artist can be discovered from his art work</p>
              </div>
            </div>
          </div>
          <div className="card-footer" >
          <div className="comments">
          <p><img src={like} alt="" />   20 </p>
          <p><img src={comment} alt="" /> 200 </p>
          </div>
          <div className="ratings">
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={star} alt=""/>
          <img src={emptyStar} alt=""/>
          <img src={emptyStar} alt=""/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ArtList;
