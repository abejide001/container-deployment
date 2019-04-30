/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../components/Search';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Search />);
});
describe('Search Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
