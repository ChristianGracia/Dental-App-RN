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
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      email: "adc-app"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <View style={{ padding: 30 }}>
        <TextInput
          type="text"
          name="patientName"
          placeholder="Name"
          onChange={this.onChange}
          value={this.state.patientName}
        />

        <TextInput
          type="tel"
          name="patientPhone"
          placeholder="Phone Number"
          onChange={this.onChange}
          value={this.state.patientPhone}
        />
        <TextInput
          type="text"
          name="patientEmail"
          onChange={this.onChange}
          placeholder="Leave a message"
          value={this.state.patientEmail}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Email;
