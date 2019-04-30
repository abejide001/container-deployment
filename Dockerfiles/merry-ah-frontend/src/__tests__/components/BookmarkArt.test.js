import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import { BookmarkArt } from '../../components/BookmarkArt.jsx';
import { bookmarkProps } from '../__mocks__/propsMock';

let wrapper;
describe('Bookmark Component', () => {
  beforeEach(() => {
    wrapper = mount(
    <MemoryRouter><BookmarkArt {...bookmarkProps}/></MemoryRouter>,
    );
  });
  it('should call renderBookmarkMethod', () => {
    const bookMarkArtInstance = wrapper.find('BookmarkArt');
    sinon.spy(bookMarkArtInstance.instance(), 'renderBookmartArt');
    bookMarkArtInstance.instance().renderBookmartArt();
    expect(bookMarkArtInstance.instance().renderBookmartArt.calledOnce)
      .toEqual(true);
  });
  it('should return loading bookmark when is fetching is true', () => {
    expect(wrapper.find('p').text()).toEqual('Loading Bookmarks....');
  });
  it('should return user as zero bookmark when is fetching is false', () => {
    bookmarkProps.bookmark.isFetching = false;
    bookmarkProps.bookmark.bookmarks.data.length = 0;
    wrapper = mount(<MemoryRouter><BookmarkArt {...bookmarkProps}/></MemoryRouter>);
    expect(wrapper.find('p').text()).toEqual('User has 0 bookmark');
  });
});
