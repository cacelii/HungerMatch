import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import { logout } from '../store/auth';
import { fetchSpicyMatches } from '../store/matches';

class Home extends Component {
  componentDidMount() {
    console.log('Spicy ', this.props.getSpicyMatches());
  }

  userLogout(evt) {
    this.props.onLogout();
    evt.preventDefault();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { username } = this.props;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
      },
      logout: {
        marginTop: 50,
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderColor: 'steelblue'
      }
    });
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text
          style={{ fontSize: 30, textAlign: 'center', marginBottom: 8 }}
        >{`Welcome, ${username}!`}</Text>
        <Text style={{ fontSize: 27, textAlign: 'center', color: 'crimson' }}>
          What are you craving?
        </Text>
        <View style={styles.container}>
          <Button onPress={() => navigate('Spicy')} title="spicy" />
          <Button onPress={() => navigate('Sweet')} title="sweet" />
          <Button onPress={() => navigate('Salty')} title="salty" />
          <Button onPress={() => navigate('Sour')} title="sour" />
          <Button onPress={() => navigate('Umami')} title="umami" />
        </View>
        <View style={styles.logout}>
          {/*<Button onPress={evt => this.userLogout(evt)} title="Logout" />*/}
          <Button onPress={() => navigate('Login')} title="Logout" />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logout());
    },
    getSpicyMatches() {
      dispatch(fetchSpicyMatches());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
