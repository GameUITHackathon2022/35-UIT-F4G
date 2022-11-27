import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import News from '../screens/News/News';
import DonationScreen from '../screens/Donation';
import GiftScreen
 from '../screens/GiftScreen/GiftScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { IC_New } from '../assets/icons';
export default function BottomNavigation() {
  const styleTabBarIcon = {
    height: 42,
    width: 30,
    alignSelf: 'center',
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="News" component={News}
      options={{
        tabBarIcon: ({focused}) => {
          const ColorIcon = focused ? "#45DF95": "#BEBAB3";
          const ColorText = focused
            ? "#45DF95"
            : "#BEBAB3";
          return (
            <View style={{styleTabBarIcon}}>
              <Text style={[ {color: ColorText}]}>
               News
              </Text>
            </View>
          );
        },
      }}></Tab.Screen>
      <Tab.Screen name="Donation" component={DonationScreen} options={{
        tabBarIcon: ({focused}) => {
          const ColorIcon = focused ? "#45DF95": "#BEBAB3";
          const ColorText = focused
            ? "#45DF95"
            : "#BEBAB3";
          return (
            <View style={{styleTabBarIcon}}>
              <Text style={[ {color: ColorText}]}>
               Donation
              </Text>
            </View>
          );
        },
      }}></Tab.Screen>
      <Tab.Screen name="Gift" component={GiftScreen} options={{
        tabBarIcon: ({focused}) => {
          const ColorIcon = focused ? "#45DF95": "#BEBAB3";
          const ColorText = focused
            ? "#45DF95"
            : "#BEBAB3";
          return (
            <View style={{styleTabBarIcon}}>
              <Text style={[ {color: ColorText}]}>
                Gift
              </Text>
            </View>
          );
        },
      }}></Tab.Screen>
      <Tab.Screen name="Profile" component={ ProfileScreen} options={{
        tabBarIcon: ({focused}) => {
          const ColorIcon = focused ? "#45DF95": "#BEBAB3";
          const ColorText = focused
            ? "#45DF95"
            : "#BEBAB3";
          return (
            <View style={{styleTabBarIcon}}>
              <Text style={[ {color: ColorText}]}>
               Profile
              </Text>
            </View>
          );
        },
      }}></Tab.Screen>
    </Tab.Navigator>
  );
}
