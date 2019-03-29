import React from "react";
import { AsyncStorage } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import { Button } from "react-native-elements";
import { AuthConsumer } from "../../contexts/AuthContext";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };

  _signOutAsync = async (logout) => {
    logout()
    .then(() => {
        this.props.navigation.navigate('Auth');
    })
    .catch(error => {
        this.setState({ error })
    })
  };

  render() {
    return (
      <AuthConsumer>
        {({ logout }) => (
          <>
            <ExpoConfigView />
            <Button
              title="Actually, sign me out :)"
              onPress={() => this._signOutAsync(logout)}
            />
          </>
        )}
      </AuthConsumer>
    );
  }
}