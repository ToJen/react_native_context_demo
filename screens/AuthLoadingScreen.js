import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { AuthConsumer } from "../contexts/AuthContext";

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.context.getToken()
    .then((userToken) => {
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    })
    .catch(error => {
        this.setState({ error });
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <AuthConsumer>
          {context => (
            <>
              <ActivityIndicator />
              <StatusBar barStyle="default" />
            </>
          )}
        </AuthConsumer>
      </View>
    );
  }
}

const ForwardRef = React.forwardRef((props, ref) => (
  <AuthConsumer>
    {context => <AuthLoadingScreen context={context} {...props} />}
  </AuthConsumer>
));

export default ({ navigation }) => (
  <View style={styles.container}>
    <ForwardRef navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
