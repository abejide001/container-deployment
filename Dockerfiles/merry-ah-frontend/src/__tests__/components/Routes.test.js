/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../components/Routes';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Routes />);
});
describe('Routes Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
