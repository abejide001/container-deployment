import 'babel-polyfill';
import React from 'react';
import { MemoryRouter, Redirect } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../../components/authentication/Login.jsx';
import ConnectedGuestRoute,
{ GuestRoute } from '../../components/GuestRoute.jsx';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

const props = {
  component: Login,
  auth: { isAuthenticated: true },
  location: {
    pathname: '/login',
  },
};

const wrapper = mount(<MemoryRouter>
  <GuestRoute {...props} />
</MemoryRouter>);
describe('<GuestRoute />', () => {
  it(
    `renders a redirect component when a logged in 
    user tries to access
    an login route`,
    () => {
      const expected = <Redirect to={{
        pathname: '/',
        state: { from: props.location },
      }} />;
      expect(wrapper.contains(expected)).toEqual(true);
    },
  );
});
describe('<ConnectedGuestRoute>', () => {
  it('should match snapshot', () => {
    const connectWrapper = shallow(
        <Provider store={store}>
            <ConnectedGuestRoute/>
        </Provider>,
    );
    expect(connectWrapper).toMatchSnapshot();
  });
});
