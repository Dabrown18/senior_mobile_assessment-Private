/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App'
import {name as appName} from './app.json';
import persistor, {store} from "./app/redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const CliniciansAppApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => CliniciansAppApp);
