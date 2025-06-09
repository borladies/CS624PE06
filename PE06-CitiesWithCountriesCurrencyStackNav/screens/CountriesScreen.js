import React from 'react';
import { View, FlatList } from 'react-native';
import CountryItem from '../components/CountryItem';

const countries = [
  { id: '1', name: 'USA', currency: 'USD', usesCurrency: true },
  { id: '2', name: 'Japan', currency: 'YEN', usesCurrency: true },
  { id: '3', name: 'Elbonia', currency: 'ELB', usesCurrency: false },
];

export default function CountriesScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CountryItem
            country={item}
            onPress={() => navigation.navigate('Country', { country: item })}
          />
        )}
      />
    </View>
  );
}
