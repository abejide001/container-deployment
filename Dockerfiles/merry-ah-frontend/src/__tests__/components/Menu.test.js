/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import localStorageMock from '../__mocks__/localStorageMock';

window.localStorage = localStorageMock;

let wrapper;
let props = {
  auth: {
    isAuthenticated: true,
    user: { username: 'Juliet' },
  },
};
describe('Menu Component', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<Menu {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
  describe('Elements', () => {
    beforeEach(() => {
      wrapper = mount(<MemoryRouter><Menu {...props}/></MemoryRouter>);
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('should have one button element', () => {
      expect(wrapper.find('button').length).toEqual(1);
    });
    it('it should display log out', () => {
      expect(wrapper.find('#nav-link').at(0).text()).toEqual('logout');
    });
    it('it should display login for non logged in users ', () => {
      props = {
        auth: {
          isAuthenticated: false,
        },
      };
      wrapper = mount(<MemoryRouter><Menu {...props}/></MemoryRouter>);
      expect(wrapper.find('NavLink').at(1).text()).toEqual('Login');
    });
  });
});
