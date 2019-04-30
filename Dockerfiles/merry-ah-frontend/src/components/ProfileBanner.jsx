import React from 'react';
import avartar from '../assets/images/profile.jpg';

const ProfileBanner = () => (
  <React.Fragment>
    <div className="profile-banner">
      <div id="profile-image">
        <div
        style={{
          width: '215px',
          height: '215px',
          borderRadius: '50%',
          position: 'relative',
          backgroundImage: `url(${avartar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        >
        </div>
        <h2>Akintunde Jubril</h2>
      </div>
      <button id="edit-button" className="btn btn-primary btn-lg">
        Edit Profile
      </button>
    </div>
    <div id="aside">
      <div className="row">
        <div className="col-3 aside">
          {' '}
          <strong>12</strong>
          <i className="aside-text"> Artworks</i>{' '}
        </div>
        <div className="col-3 aside">
          {' '}
          <strong>253</strong>
          <i className="aside-text"> Followers</i>
        </div>
        <div className="col-3 aside">
          {' '}
          <strong>93</strong>
          <i className="aside-text"> Following</i>
        </div>
        <div className="col-2 aside">
          {' '}
          <strong>5</strong>
          <br />
          <i className="aside-text"> Sold</i>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ProfileBanner;
