import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Sedation extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Sedation</Text>
        <Text style={styles.itemPickText}>Sedation text goes here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 20
  },
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    color: "red",
    paddingTop: 20
  }
});

export default Sedation;