// React
import React from 'react';
import { hydrate, render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
// Redux Persist
import { PersistGate } from 'redux-persist/es/integration/react'
// Components
import App from './components/App';
// Stylesheets
import './stylesheets/base/normalize.css';

const { persistor, store } = configureStore();
const app = (
  <Provider store={store}>
      <PersistGate
      loading={null}
      onBeforeLift={null}
      persistor={persistor}
      >
          <App />
      </PersistGate>
  </Provider>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

registerServiceWorker();
