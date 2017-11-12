import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { fetchSpicyMatches } from '../store/matches';

class Flavors extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ position });
      },
      error => alert(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    console.log('position ', this.props.position.coords);
  }

  // let { latitude, longitude } = this.props.position.coords;

  // let latlong = `${String(latitude)},${String(longitude)}`;

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        marginBottom: 25
      }
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.displayName}</Text>
        <Image
          source={{ uri: this.props.image }}
          style={{ height: 220, width: 270 }}
        />
        <View style={{ marginTop: 25 }}>
          {
            <TouchableOpacity
              style={{
                borderRadius: 7,
                padding: 10,
                backgroundColor: 'aquamarine'
              }}
              onPress={() => this.props.navigation.navigate('Matches')}
            >
              <Text style={{ fontSize: 15 }}>{`Find me ${this.props
                .name}!`}</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const mapSpicy = state => ({
  name: 'spicy',
  displayName: 'Spice me up!',
  position: '',
  image:
    'https://assets3.thrillist.com/v1/image/1668698/size/tmg-article_default_mobile.jpg'
});

const mapSweet = state => ({
  name: 'sweet',
  displayName: 'Sweet as',
  position: '',
  image:
    'http://hyhoi.com/wp-content/uploads/2014/05/f-sweet-magnolia-bakery-bleecker-street-cupcake-shop-chocolate-cakes-favorite-desserts.jpg'
});

const mapSalty = state => ({
  name: 'salty',
  displayName: 'More salt please',
  position: '',
  image:
    'http://www.womenfitness.net/wp/wp-content/uploads/2017/06/foods-encourage2-1000x667.jpg'
});

const mapSour = state => ({
  name: 'sour',
  displayName: 'Love me some sour',
  position: '',
  image:
    'https://qph.ec.quoracdn.net/main-qimg-f571aae41744d5bc520eade65e2325a4-c'
});

const mapUmami = state => ({
  name: 'umami',
  displayName: 'Umami what?',
  position: '',
  image:
    'https://media1.fdncms.com/pique/imager/the-fifth-taste-umami-is-a-controve/u/zoom/2656698/food_epicrious1-1.jpg'
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
