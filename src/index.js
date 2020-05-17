import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import theme from './config/theme'
import * as serviceWorker from './service/serviceWorker/serviceWorker';
import { ApplicationRouter } from './infrastructure/router';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApplicationRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
