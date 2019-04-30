import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiderBar from './SideBar.jsx';
import ProfileBanner from './ProfileBanner.jsx';
import ArtList from './ArtList.jsx';
/**
 * Profile Componenet
 */
class Profile extends Component {
  /**
 * @param {function} render
 *  @returns {jsx} jsx
 */
  render() {
    return (
      <React.Fragment>
      <ProfileBanner />
      <ArtList />
      <SiderBar />
      </React.Fragment>
    );
  }
}


export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
