import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class DermalFillers extends Component {
  render() {
    return (
      <View style={{ padding: 15 }}>
        <Text style={styles.itemPick}>Dermal Fillers</Text>
        <Text style={styles.itemPickText}>Dermal Fillers text goes here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20
  },
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#114260",
    marginTop: 20,
    backgroundColor: "#fcec01",
    marginBottom: 10
  }
});

export default DermalFillers;
