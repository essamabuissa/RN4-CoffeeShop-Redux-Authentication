import React, { Component } from "react";

// Screen Names
import { SIGNUP } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { navigation } = this.props;
    const { username, password } = this.state;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() =>
            alert(
              `YOU'RE TRYING TO LOGIN AS "${username}". 
        "${password}" is a really stupid password.`
            )
          }
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

export default Login;
