import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import { logout } from '../store/auth';

class Secured extends Component {
  userLogout(evt) {
    this.props.onLogout();
    evt.preventDefault();
  }

  render() {
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
        <Text style={{ fontSize: 30 }}>{`Welcome ${this.props.username}`}</Text>
        <Text style={{ fontSize: 25 }}>What are you craving?</Text>
        <View style={styles.container}>
          <Button onPress={evt => console.log(evt)} title="sweet" />
          <Button onPress={evt => console.log(evt)} title="spicy" />
          <Button onPress={evt => console.log(evt)} title="salty" />
          <Button onPress={evt => console.log(evt)} title="sour" />
          <Button onPress={evt => console.log(evt)} title="umami" />
        </View>
        <View style={styles.logout}>
          <Button onPress={evt => this.userLogout(evt)} title="Logout" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Secured);
