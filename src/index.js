/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import 'antd-mobile/dist/antd-mobile.css';
import Root from './components/Root';
import './styles/styles.scss'; 
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

render(
  <AppContainer>
    <Root
     store={store}
     history={history}
  />
  </AppContainer>,
  document.getElementById('app').innerHTML = 'Hi Guest Visitor';
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot
         store={store}
         history={history}
        />
      </AppContainer>,
      document.getElementById('app')).innerHTML = 'Hi Guest Visitor';
    );
  });
}
