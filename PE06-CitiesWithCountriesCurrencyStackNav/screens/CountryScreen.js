// screens/CountryScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function CountryScreen({ route }) {
  const { country } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{country.name}</Text>
      <Text style={{ fontSize: 18 }}>Currency: {country.currency}</Text>
      <Text style={{ fontSize: 18 }}>
        Used? {country.usesCurrency ? 'Yes' : 'No'}
      </Text>
    </View>
  );
}
