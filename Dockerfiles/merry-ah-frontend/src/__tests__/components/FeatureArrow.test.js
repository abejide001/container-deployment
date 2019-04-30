import React from 'react';
import { shallow } from 'enzyme';
import FeatureArrow from '../../components/FeatureArrow.jsx';
import props from '../__mocks__/__featureMocks__/arrowMock';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FeatureArrow {...props} />);
});
describe('FeatureArrow Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
