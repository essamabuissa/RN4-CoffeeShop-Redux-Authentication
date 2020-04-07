import React, { Component } from "react";

// Screen Names
import { LOGIN } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { navigation } = this.props;
    const { username, password } = this.state;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
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
              `YOU'RE TRYING TO SIGNUP AS "${username}". 
          "${password}" is a really stupid password.`
            )
          }
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(LOGIN)}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}

export default Signup;
