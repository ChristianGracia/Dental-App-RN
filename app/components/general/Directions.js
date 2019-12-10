import React, { Component } from "react";
import { Linking, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default class Directions extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.buttonBackground}
        onPress={() =>
          Linking.openURL(
            "https://www.google.com/maps/place/Advanced+Dental+Care+of+Norton/@41.9615083,-71.2001785,17z/data=!3m1!4b1!4m5!3m4!1s0x89e461d156c36c9f:0xb5fcf264919e17a5!8m2!3d41.9615083!4d-71.1979898"
          )
        }
      >
        <Text style={styles.buttonText}>
          Directions{" "}
          {/* <FontAwesomeIcon icon="map-marker-alt" color="#114260" size={20} /> */}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 10,
    padding: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    textAlign: "center"
  }
});
