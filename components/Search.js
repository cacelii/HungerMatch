import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from 'yelp-fusion';
import secrets from '../secrets';

const token = yelp
  .accessToken(process.env.YELP_CLIENT_ID, process.env.YELP_CLIENT_SECRET)
  .then(response => {
    console.log(response.jsonBody.access_token);
  })
  .catch(e => {
    console.log(e);
  });

const client = yelp.client(token);

client
  .search({
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca'
  })
  .then(response => {
    console.log(response.jsonBody.businesses[0].name);
  })
  .catch(e => {
    console.log(e);
  });

class Search extends Component {
  constructor() {
    super();
    this.state = {
      locationResult: null
    };
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied'
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Location: {this.state.locationResult}</Text>
      </View>
    );
  }
}

export default Search;
