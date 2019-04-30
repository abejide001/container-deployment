import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import './assets/scss/search.scss';
import './assets/scss/menu.scss';
import './assets/scss/auth.scss';
import './assets/scss/footer.scss';
import './assets/scss/featuredarts.scss';
import './assets/scss/showcase.scss';
import './assets/scss/categories.scss';
import './assets/scss/sideBar.scss';
import './assets/scss/profile.scss';
import './assets/scss/bookmarkArt.scss';
import './assets/scss/createArt.scss';


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app'),
);
