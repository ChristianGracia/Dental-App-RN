import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

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
        <TextInput
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
        />

        <TextInput
          type="tel"
          name="Phone"
          placeholder="Phone Number"
          value={this.state.phone}
        />
        <TextInput
          type="text"
          name="body"
          placeholder="Leave a message"
          value={this.state.body}
        />
        <TouchableOpacity onPress={() => console.log("hi")}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Email;
