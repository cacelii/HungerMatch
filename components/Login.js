import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet
} from 'react-native';
import { login, signup } from '../store/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      route: 'Login',
      username: '',
      password: ''
    };
  }

  toggleRoute(evt) {
    let alt = this.state.route === 'Login' ? 'SignUp' : 'Login';
    this.setState({ route: alt });
    evt.preventDefault();
  }

  render() {
    let alt = this.state.route === 'Login' ? 'SignUp' : 'Login';

    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
      }
    });
    return (
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Text style={{ fontSize: 27 }}>{this.state.route}</Text>
          <View style={{ marginTop: 15 }}>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
              keyboardType="email-address"
              value={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
          </View>
        </View>
        <View style={{ margin: 7 }} />
        {/*<Button onPress={evt => this.userLogin(evt)} title={this.state.route} />*/}
        {
          <Button
            onPress={() => {
              this.props.onLogin(this.state.username, this.state.password);
              this.props.navigation.navigate('Home');
            }}
            title={this.state.route}
          />
        }
        <Text
          style={{ fontSize: 16, color: 'blue', textAlign: 'center' }}
          onPress={evt => this.toggleRoute(evt)}
        >
          {alt}
        </Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => {
      dispatch(login(username, password));
    },
    onSignUp: (username, password) => {
      dispatch(signup(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
