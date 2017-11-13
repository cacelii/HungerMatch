import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Matches extends Component {
  render() {
    const matches = this.props.navigation.state.params.data.businesses;
    console.log(
      'matches -->',
      this.props.navigation.state.params.data.businesses
    );
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      header: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15
      }
    });
    return (
      <ScrollView>
        {matches.map((match, i) => (
          <View key={match.id}>
            <View style={styles.container}>
              <Text style={styles.header}>{`${i + 1}. ${match.name}`}</Text>
              <Image
                source={{ uri: match.image_url }}
                style={{ height: 220, width: 270 }}
              />
              <Text style={{ marginTop: 15 }}>{`Price: ${match.price}`}</Text>
              <Text>{`Rating: ${match.rating}`}</Text>
              <Text>{`Phone: ${match.display_phone}`}</Text>
              <Text>{`Address: ${match.location.display_address[0]}`}</Text>
              <Text
                style={{ marginBottom: 15 }}
              >{`Check out the ${match.review_count} reviews on Yelp`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
