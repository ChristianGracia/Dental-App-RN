import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

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
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View style={{ textAlign: "left", padding: 20 }}>
          <TextInput
            type="text"
            name="patientName"
            placeholder="Name"
            onChange={this.onChange}
            value={this.state.patientName}
            style={{ marginTop: 5 }}
          />
          <TextInput
            type="tel"
            name="patientPhone"
            placeholder="Phone Number"
            onChange={this.onChange}
            value={this.state.patientPhone}
            style={{ marginTop: 5 }}
          />
          <TextInput
            multiline={true}
            type="text"
            name="patientEmail"
            onChange={this.onChange}
            placeholder="Leave a message"
            value={this.state.patientEmail}
            style={{ marginTop: 5 }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: wp("40%"),
    marginTop: 30
  }
});

export default Email;
