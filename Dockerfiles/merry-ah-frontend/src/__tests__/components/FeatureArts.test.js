import React from 'react';
import { mount } from 'enzyme';
import props from '../__mocks__/__featureMocks__/propsMock';
import {
  FeaturedArts,
} from '../../components/FeaturedArts.jsx';


let wrapper;
beforeEach(() => {
  wrapper = mount(
    <FeaturedArts {...props} />,
  );
});
describe('FeaturedArts Component', () => {
  it('should match snapshot', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper).toMatchSnapshot();
  });
  it('should have 3 feature cards', () => {
    expect(wrapper.find('FeatureCard').length).toEqual(3);
  });
  it('should have 2 Arrow components', () => {
    expect(wrapper.find('Arrow').length).toEqual(2);
  });
  it('should have one active card', () => {
    expect(wrapper.find('.cards_active').length).toEqual(1);
  });
  it('should have two inactive card', () => {
    expect(wrapper.find('.cards_inactive').length).toEqual(2);
  });
  it('should have three feature buttons', () => {
    expect(wrapper.find('FeatureButton').length).toEqual(3);
  });
  it('should have view as text for Featurebutton', () => {
    expect(wrapper
      .find('FeatureButton').first().render().text()).toContain('View');
  });
  it('should have props for imgUrl', () => {
    expect(wrapper
      .find('FeatureCard')
      .first().props().imgUrl).toContain('../assets/images/1.jpg');
  });
  it('should have props for title', () => {
    expect(wrapper
      .find('FeatureCard')
      .first().props().title).toContain('Do you love art');
  });
});
