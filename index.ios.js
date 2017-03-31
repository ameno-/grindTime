/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import {configureStore} from './app/store';
import Header from './app/components/Header';

export default class grindTime extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
       <View style={styles.container}>
          <View style={styles.body}>
            <Header />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  body: {
    flex: 1,
    zIndex: 1000
  },
});

AppRegistry.registerComponent('grindTime', () => grindTime);
