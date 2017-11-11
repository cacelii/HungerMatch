import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Yelp from './Yelp';
import Login from './Login';
import Home from './Home';

const Spicy = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Matches</Text>
      </View>
    </ScrollView>
  );
};

const Sweet = () => (
  <ScrollView style={{ padding: 20 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Matches</Text>
    </View>
  </ScrollView>
);

const Salty = () => (
  <ScrollView style={{ padding: 20 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Matches</Text>
    </View>
  </ScrollView>
);

const Sour = () => (
  <ScrollView style={{ padding: 20 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Matches</Text>
    </View>
  </ScrollView>
);

const Umami = () => (
  <ScrollView style={{ padding: 20 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Matches</Text>
    </View>
  </ScrollView>
);

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'HungerMatch'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Spicy: {
    screen: Yelp,
    navigationOptions: {
      headerTitle: 'Spicy'
    }
  },
  Sweet: {
    screen: Sweet,
    navigationOptions: {
      headerTitle: 'Sweet'
    }
  },
  Salty: {
    screen: Salty,
    navigationOptions: {
      headerTitle: 'Salty'
    }
  },
  Sour: {
    screen: Sour,
    navigationOptions: {
      headerTitle: 'Sour'
    }
  },
  Umami: {
    screen: Umami,
    navigationOptions: {
      headerTitle: 'Umami'
    }
  }
});

export default RootNavigator;
