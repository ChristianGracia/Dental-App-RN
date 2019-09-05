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
    fetch("https://sendpoint.io/id/ADCEMAIL", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.patientName,
        phone: this.state.patientPhone,
        body: this.state.patientEmail,
        email: this.state.email
      })
    });
  };

  onChange = event => {
    switch (event.nativeEvent.target) {
      case 157:
        this.setState({ patientName: event.nativeEvent.text });
        break;
      case 159:
        this.setState({ patientPhone: event.nativeEvent.text });
        break;
      case 163:
        this.setState({ patientEmail: event.nativeEvent.text });
      default:
        console.log("err");
    }
  };

  render() {
    return (
      <View style={{ padding: 60 }}>
        <TextInput
          type="text"
          id="a"
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
        <TouchableOpacity
          onPress={this.handleSubmit}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitButtonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    textAlign: "center"
  },

  submitButton: {
    backgroundColor: "#fcec01"
  }
});

export default Email;
