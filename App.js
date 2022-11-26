import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import IntroScreen from './src/screens/IntroScreen';
import Donation from './src/screens/Donation';

const App = () => {
  return (
    <SafeAreaView>
        <Donation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
