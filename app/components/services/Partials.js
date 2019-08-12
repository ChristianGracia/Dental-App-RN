import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Partials extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPickText}>Partial Denture text goes here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 20
  }
});

export default Partials;
