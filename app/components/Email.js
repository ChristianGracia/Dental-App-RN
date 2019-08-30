import React, { Component } from "react";
import { View, TextInput, Form } from "react-native";
import Form from "react-native-form";

export default class Email extends Component {
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
        <Form ref="form">
          <TextInput
            style={styles.formStyle}
            type="text"
            name="name"
            placeholder="Name"
          />

          <TextInput type="email" name="email" placeholder="Email" />
          <TextInput type="text" name="body" placeholder="Leave a message" />
        </Form>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  formStyle: {
    alignItems: "center",
    marginTop: 10
  }
});
