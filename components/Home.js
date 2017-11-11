import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import { logout } from '../store/auth';

class Home extends Component {
  userLogout(evt) {
    this.props.onLogout();
    evt.preventDefault();
  }

  render() {
    const { navigate, username } = this.props.navigation;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      logout: {
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderColor: 'steelblue'
      }
    });
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 30 }}>{`Welcome ${username}`}</Text>
        <Text style={{ fontSize: 25 }}>What are you craving?</Text>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
