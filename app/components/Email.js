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
    return;
    <View>
      <Text>Hi</Text>
      {/*   <Form
              action="https://sendpoint.io/id/ADCEMAIL"
              method="POST"
            >
              
                  <Input
                    style={{
                      padding: 5
                    }}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder="Name"
                  />
     
                  <Input
                    style={{
                      padding: 5
                    }}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
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
                value={this.state.body}
                onChange={this.onChange}
              />
      
              <input
                type="submit"
                value="send"
                onClick={e => {
                  if (body == "" || email == "" || name == "") {
                    e.preventDefault();
                    window.alert("Please fill out form");
                  }
                }}
              />
            </Form>*/}
    </View>;
  }
}
