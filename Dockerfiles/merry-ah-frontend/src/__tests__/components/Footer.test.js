/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Footer />);
});
describe('Footer Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
