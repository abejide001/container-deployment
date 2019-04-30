/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../../components/Logo';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Logo />);
});
describe('Logo Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
