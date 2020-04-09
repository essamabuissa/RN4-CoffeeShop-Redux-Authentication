import React, { Component } from "react";

// Screen Names
import { SIGNUP, COFFEESHOPS, SHOP } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authentication";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;
    const { navigation, login } = this.props;

    const redirectToCoffeeList = () =>
      navigation.navigate(SHOP, { screen: COFFEESHOPS });

    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => login(this.state, redirectToCoffeeList)}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(SIGNUP)}
        >
          Click here to register!
        </Text>
      </View>
    );
  }
}
const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
