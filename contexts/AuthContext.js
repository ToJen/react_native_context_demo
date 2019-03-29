import React, { Component, createContext } from "react";
import { AsyncStorage } from "react-native";

const AuthContext = createContext();

class AuthProvider extends Component {
  state = { token: "" };

  componentWillMount() {
    AsyncStorage.getItem("userToken")
      .then(token => {
        this.setState({ token });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  login = async () => {
    try {
      const resp = await AsyncStorage.setItem("userToken", "test_token");
      return resp;
    } catch (error) {
      this.setState({ error });
    }
  };

  logout = async () => {
    try {
      const resp = await AsyncStorage.removeItem("userToken");
      return resp;
    } catch (error) {
      this.setState({ error });
    }
  };

  getToken = async () => {
    try {
      const resp = await AsyncStorage.getItem("userToken");
      return resp;
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          getToken: this.getToken
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
