import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/Home.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home />);
});
describe('Home Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
