import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import theme from './config/theme'
import * as serviceWorker from './service/serviceWorker/serviceWorker';
import { ApplicationRouter } from './infrastructure/router';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './infrastructure/redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApplicationRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
