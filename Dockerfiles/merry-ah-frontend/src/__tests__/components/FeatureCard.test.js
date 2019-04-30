import React from 'react';
import { shallow } from 'enzyme';
import FeatureCard from '../../components/FeatureCard.jsx';
import props from '../__mocks__/__featureMocks__/cardsMock';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FeatureCard {...props} />);
});
describe('FeatureCard Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
