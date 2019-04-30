import React from 'react';
import { shallow } from 'enzyme';
import Showcase from '../../components/Showcase';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Showcase />);
});
describe('Showcase Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
