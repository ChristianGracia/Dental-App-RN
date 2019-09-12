import React, { Component } from "react";
import { Linking, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default class Directions extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.buttonBackground}
        onPress={() => Linking.openURL(`tel:5086228777`)}
      >
        <Text style={styles.buttonText}>
          Call us <FontAwesomeIcon icon="phone" color="#114260" size={20} />
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
