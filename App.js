import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './client/components/Navigator';
import store from './client/store';

export default class HungerMatch extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('HungerMatch', () => HungerMatch);
