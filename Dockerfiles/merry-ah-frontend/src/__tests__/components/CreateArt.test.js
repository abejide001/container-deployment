/* eslint-disable import/no-duplicates */
/* eslint-disable no-restricted-globals */
import 'babel-polyfill';
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { CreateArt, mapStateToProps } from '../../components/CreateArt.jsx';
import {createArtProps as props} from '../__mocks__/propsMock';

let wrapper;

describe('CreateArt Component', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<CreateArt {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Elements', () => {
    beforeEach(() => {
      wrapper = mount(
        <CreateArt {...props} />,
      );
    });

    it('map state to props', () => {
      const state = mapStateToProps({});
      expect(state).toEqual({});
    });


    it('should empty the form on submit', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();
      expect(wrapper.find('.title').prop('value')).toEqual('');
    });

    it('should have one button element', () => {
      expect(wrapper.find('button').length).toEqual(1);
    });

    it('should call addFileToState()', function () {
      sinon.spy(wrapper.instance(), 'addFileToState');
      wrapper.instance().addFileToState();
      expect(wrapper.instance().addFileToState.calledOnce)
        .toEqual(true);
    });

    it('should calls removeFileFromState()', function () {
      const state = {
        file : [{ upload: { uuid: 100 }}]
      };
      sinon.spy(wrapper.instance(), 'removeFileFromState');
      wrapper.instance().removeFileFromState(state.file[0].upload);
      expect(wrapper.instance().removeFileFromState.calledOnce)
        .toEqual(true);
    });

    it('should calls Notify.notifyError()', function () {
      const state = {
        file : [{ upload: { uuid: 100 }}]
      };
      sinon.spy(wrapper.instance(), 'removeFileFromState');
      wrapper.instance().removeFileFromState(state.file[0].upload);
      expect(wrapper.instance().removeFileFromState.calledOnce)
        .toEqual(true);
    });
  });
});

