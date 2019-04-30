import 'babel-polyfill';
import React from 'react';
import { MemoryRouter, Redirect } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from '../../components/Profile.jsx';
import ConnectedProtectedRoute,
{ PrivateRoute } from '../../components/PrivateRoute.jsx';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

const props = {
  component: Profile,
  auth: { isAuthenticated: false },
};

const wrapper = mount(<MemoryRouter>
  <PrivateRoute {...props} />
</MemoryRouter>);
describe('<PrivateRoute />', () => {
  it(
    `renders a redirect component when a user tries to access
    an private route`,
    () => {
      const expected = <Redirect to='/login' />;
      expect(wrapper.contains(expected)).toEqual(true);
    },
  );
});
describe('<ConnectedAdminRoute>', () => {
  it('should match snapshot', () => {
    const connectWrapper = shallow(
        <Provider store={store}>
            <ConnectedProtectedRoute/>
        </Provider>,
    );
    expect(connectWrapper).toMatchSnapshot();
  });
});
