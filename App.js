import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Application from './components/Application';
import store from './store/index.js';

export default class HungerMatch extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('HungerMatch', () => HungerMatch);
