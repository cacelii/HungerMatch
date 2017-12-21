import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Yelp from 'v3-yelp-api';
import secrets from '../../secrets';

class Flavors extends Component {
  constructor() {
    super();
    this.state = {
      position: ''
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ position });
      },
      error => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  fetchMatches() {
    console.log('location', this.state.position.coords);
    const credentials = {
      appId: process.env.YELP_CLIENT_ID,
      appSecret: process.env.YELP_CLIENT_SECRET
    };

    const yelp = new Yelp(credentials);

    let { latitude, longitude } = this.state.position.coords;

    let latlong = `${String(latitude)},${String(longitude)}`;
    let params = {
      term: this.props.name,
      location: latlong,
      limit: '3'
    };

    return yelp
      .search(params)
      .then(results => {
        this.props.navigation.navigate('Matches', { data: results });
      })
      .catch(err => err);
  }

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
              onPress={this.fetchMatches.bind(this)}
            >
              <Text style={{ fontSize: 15 }}>{`Give me ${this.props
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
  image:
    'https://assets3.thrillist.com/v1/image/1668698/size/tmg-article_default_mobile.jpg'
});

const mapSweet = state => ({
  name: 'sweet',
  displayName: 'Sweet as',
  image:
    'http://hyhoi.com/wp-content/uploads/2014/05/f-sweet-magnolia-bakery-bleecker-street-cupcake-shop-chocolate-cakes-favorite-desserts.jpg'
});

const mapSalty = state => ({
  name: 'salty',
  displayName: 'More salt please',
  image:
    'http://www.womenfitness.net/wp/wp-content/uploads/2017/06/foods-encourage2-1000x667.jpg'
});

const mapSour = state => ({
  name: 'sour',
  displayName: 'Love me some sour',
  image:
    'https://qph.ec.quoracdn.net/main-qimg-f571aae41744d5bc520eade65e2325a4-c'
});

const mapUmami = state => ({
  name: 'umami',
  displayName: 'Umami what?',
  image:
    'https://media1.fdncms.com/pique/imager/the-fifth-taste-umami-is-a-controve/u/zoom/2656698/food_epicrious1-1.jpg'
});

const mapDispatch = dispatch => ({});

export const Spicy = connect(mapSpicy, mapDispatch)(Flavors);
export const Sweet = connect(mapSweet, mapDispatch)(Flavors);
export const Salty = connect(mapSalty, mapDispatch)(Flavors);
export const Sour = connect(mapSour, mapDispatch)(Flavors);
export const Umami = connect(mapUmami, mapDispatch)(Flavors);
