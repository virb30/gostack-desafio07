import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import colors from './styles/colors';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Routes
        ref={navigationRef => NavigationService.setNavigator(navigationRef)}
      />
    </Provider>
  );
}
