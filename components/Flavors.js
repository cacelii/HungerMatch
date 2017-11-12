import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { fetchSpicyMatches } from '../store/matches';

class Flavors extends Component {
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({ position });
  //     },
  //     error => alert(error),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  //   console.log('position ', this.props.position.coords);
  // }

  //   // let { latitude, longitude } = this.props.position.coords;

  //   // let latlong = `${String(latitude)},${String(longitude)}`;

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        marginBottom: 30
      }
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.displayName}</Text>
        {
          <TouchableOpacity
            style={{ borderRadius: 7, padding: 10, backgroundColor: '#F7C9DD' }}
            onPress={() => this.props.navigation.navigate('Matches')}
          >
            <Text style={{ fontSize: 15 }}>{`Find me ${this.props
              .name}!`}</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const mapSpicy = state => ({
  name: 'spicy',
  displayName: 'Spicy',
  position: ''
});

const mapSweet = state => ({
  name: 'sweet',
  displayName: 'Sweet',
  position: ''
});

const mapSalty = state => ({
  name: 'salty',
  displayName: 'Salty',
  position: ''
});

const mapSour = state => ({
  name: 'sour',
  displayName: 'Sour',
  position: ''
});

const mapUmami = state => ({
  name: 'umami',
  displayName: 'Umami',
  position: ''
});

const mapDispatch = dispatch => ({
  getSpicyMatches() {
    dispatch(fetchSpicyMatches());
  }
});

export const Spicy = connect(mapSpicy, mapDispatch)(Flavors);
export const Sweet = connect(mapSweet, mapDispatch)(Flavors);
export const Salty = connect(mapSalty, mapDispatch)(Flavors);
export const Sour = connect(mapSour, mapDispatch)(Flavors);
export const Umami = connect(mapUmami, mapDispatch)(Flavors);
