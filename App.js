import {Text, View} from 'react-native';
import React, {Component} from 'react';
import News from './src/screens/News/News';
import BottomNavigation from './src/routes/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/routes/TabNavigation';
export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <TabNavigation></TabNavigation>
      </NavigationContainer>
    );
  }
}
