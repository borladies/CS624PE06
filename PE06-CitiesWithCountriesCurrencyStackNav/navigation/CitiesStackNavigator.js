// navigation/CitiesStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitiesScreen from '../screens/CitiesScreen';
import CityScreen from '../screens/CityScreen';

const Stack = createNativeStackNavigator();

export default function CitiesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" component={CitiesScreen} />
      <Stack.Screen name="City" component={CityScreen} />
    </Stack.Navigator>
  );
}
