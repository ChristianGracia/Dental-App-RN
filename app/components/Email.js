import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: "",
      email: ""
    };
  }
  render() {
    return (
      <View style={{ padding: 30 }}>
        <TextInput type="text" name="name" placeholder="Name" />

        <TextInput type="email" name="email" placeholder="Email" />
        <TextInput type="text" name="body" placeholder="Leave a message" />
      </View>
    );
  }
}

export default Email;
