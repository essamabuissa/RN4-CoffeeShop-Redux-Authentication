import React from "react";
import { Text, View } from "native-base";

//Redux
import { connect } from "react-redux";

// Components
import LogoutButton from "./LogoutButton";

const Profile = ({ username }) => (
  <View>
    <Text>Hello {username}</Text>
    <LogoutButton />
  </View>
);
const mapStateToProps = ({ user }) => ({
  username: user?.username,
});

export default connect(mapStateToProps)(Profile);
