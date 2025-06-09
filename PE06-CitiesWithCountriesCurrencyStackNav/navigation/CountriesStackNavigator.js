// navigation/CountriesStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountriesScreen from '../screens/CountriesScreen';
import CountryScreen from '../screens/CountryScreen';

const Stack = createNativeStackNavigator();

export default function CountriesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries" component={CountriesScreen} />
      <Stack.Screen name="Country" component={CountryScreen} />
    </Stack.Navigator>
  );
}
