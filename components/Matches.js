import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Linking,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { fetchSpicyMatches } from '../store/matches';

class Matches extends Component {
  render() {
    console.log('Matches -->', this.props.matches);
    return (
      <View>
        <Text>Matches</Text>
        {/*
          <View>
            {this.props.matches.businesses.map(match => (
              <View key={match.id}>
                <View>
                  <Text>{match.name}</Text>
                </View>
                <View>
                  <Text>{match.rating} </Text>
                </View>
              </View>
            ))}
          </View>
          */}
      </View>
    );
  }
}

const mapState = state => ({
  matches: state.matches
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Matches);
