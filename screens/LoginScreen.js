import React, { Component } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Button } from "react-native-elements";
import { AuthConsumer } from "../contexts/AuthContext";

export default class LoginScreen extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ login }) => (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.loginScreenContainer}>
                <View>
                  <Image
                    style={styles.logoImage}
                    source={require("../assets/images/robot-prod.png")}
                  />
                </View>
                <View style={styles.loginFormView}>
                  <Text style={styles.logoText}>React Native Context Demo</Text>
                  <TextInput
                    placeholder="Username"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                  />
                  <TextInput
                    placeholder="Password"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                    secureTextEntry={true}
                  />
                  <Button
                    buttonStyle={styles.loginButton}
                    onPress={() => this.onLoginPress(login)}
                    title="Login"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}
      </AuthConsumer>
    );
  }

  onLoginPress = async (login) => {
      login()
      .then((data) => {
          this.props.navigation.navigate('App');
      })
      .catch((error) => {
          this.setState({ error })
      })
  };
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  loginScreenContainer: {
    flex: 1
  },
  logoImage: {
    width: 205,
    height: 165,
    alignSelf: "center",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    // marginTop: 100,
    marginBottom: 30,
    textAlign: "center"
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "transparent"
  }
});
