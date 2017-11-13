import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import { Spicy, Sweet, Salty, Sour, Umami } from './Flavors';
import Matches from './Matches';

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
    screen: Spicy,
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
  },
  Matches: {
    screen: Matches,
    navigationOptions: {
      headerTitle: 'Matches'
    }
  }
});

export default RootNavigator;
