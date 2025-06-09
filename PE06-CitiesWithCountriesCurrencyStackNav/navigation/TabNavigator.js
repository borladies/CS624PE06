import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitiesStackNavigator from './CitiesStackNavigator';
import CountriesStackNavigator from './CountriesStackNavigator';
import AddCityScreen from '../screens/AddCityScreen';
import AddCountryScreen from '../screens/AddCountryScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CitiesNav" component={CitiesStackNavigator} />
      <Tab.Screen name="AddCity" component={AddCityScreen} />
      <Tab.Screen name="CountriesNav" component={CountriesStackNavigator} />
      <Tab.Screen name="AddCountry" component={AddCountryScreen} />
    </Tab.Navigator>
  );
}
