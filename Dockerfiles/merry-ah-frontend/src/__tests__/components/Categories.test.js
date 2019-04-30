import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../../components/Categories.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Categories />);
});
describe('Categories Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
