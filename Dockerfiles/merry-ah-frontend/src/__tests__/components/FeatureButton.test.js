/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import FeatureButton from '../../components/FeatureButton';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FeatureButton text ='active' myclass='cardactive' />);
});
describe('FeatureButton Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
