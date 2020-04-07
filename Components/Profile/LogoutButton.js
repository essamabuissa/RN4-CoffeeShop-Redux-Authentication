import React, { Component } from "react";
import { Button, Text } from "native-base";

const LogoutButton = () => (
  <Button full danger onPress={() => alert("you wanna logout? make me!")}>
    <Text>Logout</Text>
  </Button>
);

export default LogoutButton;
