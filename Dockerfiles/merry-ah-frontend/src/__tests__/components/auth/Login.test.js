/* eslint-disable import/no-duplicates */
/* eslint-disable no-restricted-globals */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { Login } from '../../../components/authentication/Login.jsx';
import { loginProps as props } from '../../__mocks__/propsMock';
import { mapStateToProps } from '../../../components/authentication/Login.jsx';

describe('Elements in page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
    <Login {...props}/>,
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
  it('should have two input fields', () => {
    expect(wrapper.find('input').length).toEqual(2);
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
  it('should contain a password field with a password attribute', () => {
    wrapper.find('.input2').simulate('change', {
      target: name,
    });
    wrapper.update();
    expect(wrapper.find('.input2').prop('name')).toContain('password');
  });
  it('should contain a password field with a email attribute', () => {
    wrapper.find('.input1').simulate('change', {
      target: name,
    });
    wrapper.update();
    expect(wrapper.find('.input1').prop('name')).toContain('email');
  });
  it('should have email value', () => {
    wrapper.find('.input1').simulate('change', {
      target: { value: '' },
    });
    wrapper.update();
    expect(wrapper.find('.input1').prop('value')).toEqual('');
  });
  it('should empty the form on submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('.input2').prop('value')).toEqual('');
  });
  it('shoulkd render', () => {
    const props2 = { ...props, auth: { isLoading: true } };
    wrapper = mount(<Login {...props2}/>);
    expect(wrapper.find('button')).toEqual({});
  });
});
