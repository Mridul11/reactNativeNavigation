import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/Home';
import DetailScreen from './src/components/Detail';
import {StackNavigator} from 'react-navigation';

const RootStack = StackNavigator(
  {
  Home: {screen: HomeScreen},
  Details : {screen : DetailScreen}
  },
  {initialRouteName : 'Home'}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
