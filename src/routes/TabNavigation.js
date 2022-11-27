import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import IntroScreen from '../screens/IntroScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import BottomNavigation from './BottomNavigation';
import { IC_New } from '../assets/icons';
const Tab = createNativeStackNavigator();

import News from '../screens/News/News';
export default function TabNavigation() {

  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
        <Tab.Screen  name='SplashScreen' component={SplashScreen}  />
        <Tab.Screen name='IntroScreen' component={IntroScreen}/>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='SignUp' component={SignUp}/>
        <Tab.Screen name='News' component={BottomNavigation}/>
    </Tab.Navigator>
  )
}