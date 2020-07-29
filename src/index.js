import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Store from './store'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={Store}>
  <App />
  </Provider>,
  document.getElementById('root')
  );
serviceWorker.unregister();
