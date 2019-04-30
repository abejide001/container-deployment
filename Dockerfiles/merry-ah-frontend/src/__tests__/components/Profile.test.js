/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile.jsx';
import PrivateRoute from '../../components/PrivateRoute.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<PrivateRoute component={Profile} />);
});
describe('Profile Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
