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
import 'stylesheets/base/normalize.css';
// React Router
import { BrowserRouter } from 'react-router-dom';

const { persistor, store } = configureStore();

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<BuildApp />, rootElement);
} else {
  render(<BuildApp />, rootElement);
}

registerServiceWorker();

function BuildApp() {
  return(
    <Provider store={store}>
        <PersistGate
        loading={null}
        onBeforeLift={null}
        persistor={persistor}
        >
          <BrowserRouter basename="chatter/" >
            <App />
          </BrowserRouter>
        </PersistGate>
    </Provider>
  );
}
