import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import YelpApi from 'v3-yelp-api';
import secrets from '../secrets';

class Yelp extends Component {
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
      error => alert(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  fetchData() {
    const credentials = {
      appId: process.env.YELP_CLIENT_ID,
      appSecret: process.env.YELP_CLIENT_SECRET
    };

    const yelp = new YelpApi(credentials);

    let { latitude, longitude } = this.state.position.coords;

    let latlong = `${String(latitude)}, ${String(longitude)}`;
    let params = {
      term: 'spicy',
      location: latlong,
      limit: '3'
    };

    let nav = this.props.navigator;

    yelp
      .search(params)
      .then(response => {
        nav.push(response.jsonBody.businesses);
      })
      .catch(err => err);
  }

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
        <Text style={styles.welcome}>Spicilicious</Text>
        <TouchableOpacity
          style={{ borderRadius: 7, padding: 10, backgroundColor: '#F7C9DD' }}
          onPress={this.fetchData.bind(this)}
        >
          <Text style={{ fontSize: 15 }}>Find me spicy!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = Yelp;
