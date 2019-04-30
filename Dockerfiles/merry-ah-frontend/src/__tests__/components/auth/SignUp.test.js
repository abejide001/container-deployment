/* eslint-disable import/no-duplicates */
/* eslint-disable no-restricted-globals */
import 'babel-polyfill';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { SignUp } from '../../../components/authentication/SignUp.jsx';
import {signUpProps as props} from '../../__mocks__/propsMock';
import { mapStateToProps } from '../../../components/authentication/SignUp.jsx';

describe('Elements in page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
    <SignUp {...props}/>,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('map state to props', () => {
    const mock = {
      auth: {
        isLoading: true,
        user: {},
        isAuthenticated: false,
        error: '',
      },
    };
    const state = mapStateToProps(mock);
    expect(state).toEqual(mock);
  });

  it('should have eight input fields', () => {
    expect(wrapper.find('input').length).toEqual(8);
  });
  it('should have one form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });
  it('should have one button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
  it('should have Proceed text in the button', () => {
    expect(wrapper.find('button').render().text()).toContain('Proceed');
  });
  it('should contain disable props and it should be false', () => {
    expect(wrapper.find('button').props().disabled).toBe(false);
  });
  it('should contain a firstName field with a firstName attribute', () => {
    wrapper.find('.firstName').simulate('change', {
      target: name,
    });
    wrapper.update();
    expect(wrapper.find('.firstName').prop('name')).toContain('firstName');
  });

  it('should empty the form on submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('.firstName').prop('value')).toEqual('');
  });

  it('should render', () => {
    const props2 = { ...props, auth: { isLoading: true } };
    wrapper = mount(<SignUp {...props2}/>);
    expect(wrapper.find('button')).toEqual({});
  });
});
