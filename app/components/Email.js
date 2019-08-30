import React, { Component } from "react";
import { View, Text, Form, Input } from "react-native";

export default class Email extends Component {
  constructor(props) {
    this.state = {
      name: "",
      body: "",
      email: ""
    };
  }
  render() {
    return (
      <View>
        <Form action="https://sendpoint.io/id/ADCEMAIL" method="POST">
          <Input
            style={{
              padding: 5
            }}
            type="text"
            name="name"
            placeholder="Name"
          />

          <Input
            style={{
              padding: 5
            }}
            type="email"
            name="email"
            placeholder="Email"
          />
          <Input
            rows="4"
            cols="50"
            class=""
            type="text"
            name="body"
            placeholder="Leave a message"
            style={{
              textAlign: "left",
              width: "90%",
              color: "black"
            }}
          />

          <input type="submit" value="send" />
        </Form>
      </View>
    );
  }
}
