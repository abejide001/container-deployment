/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

let wrapper;
beforeEach(() => {
  const path = { pathname: 'wrongroute' };
  wrapper = shallow(<NotFound location={path}/>);
});
describe('NotFound Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
