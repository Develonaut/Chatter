import React from 'react';
import { hydrate, render } from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store/configureStore.js'
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './components/views/App';
import Loading from './components/views/Loading';

import './stylesheets/base/Normalize.css';
import './stylesheets/base/fonts/Icons.css';
import './stylesheets/base/Common.scss';

const { persistor, store } = configureStore();

const app = (
<Provider store={store}>
    <PersistGate
        loading={<Loading />}
        onBeforeLift={null}
        persistor={persistor}
    >
        <App />
    </PersistGate>
</Provider>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

registerServiceWorker();

