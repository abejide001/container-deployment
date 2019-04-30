import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import VerifySocialAuthToken from '../../components/VerifySocialAuthToken.jsx';

let wrapper;
beforeEach(() => {
  window.history.pushState({}, 'Test social url', '/test.html?token=njhkhhkjkj');
  sinon.stub(window.location, 'replace');
  wrapper = shallow(<VerifySocialAuthToken/>);
});
describe('VerifySocialAuthToken Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
