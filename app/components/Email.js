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
      phone: "",
      email: "adc-app"
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    // fetch("https://sendpoint.io/id/ADCEMAIL", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     phone: this.state.phone,
    //     body: this.state.body,
    //     email: this.state.email,
    //   })
    // });
    alert("hi");
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <View style={{ padding: 30 }}>
        <TextInput
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onChange}
        />

        <TextInput
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={this.onChange}
        />
        <TextInput
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.onChange}
          placeholder="Leave a message"
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Email;
