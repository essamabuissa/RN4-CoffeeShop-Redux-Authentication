import React, { Component } from "react";

// Screen Names
import { LOGIN } from "../../Navigation/screenNames";

//Redux
import { signup } from "../../redux/actions/authentication";
import { connect } from "react-redux";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
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
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => this.props.signup(this.state)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(LOGIN.toString())}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}
const mapDispatchToProps = { signup };

export default connect(null, mapDispatchToProps)(Signup);
