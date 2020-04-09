import React from "react";
import { Button, Text } from "native-base";

import { connect } from "react-redux";

import { logout } from "../../redux/actions/authentication";

const LogoutButton = ({ logout }) => (
  <Button full danger onPress={logout}>
    <Text>Logout</Text>
  </Button>
);

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(LogoutButton);
