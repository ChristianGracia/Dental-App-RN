import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class DermalFillers extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Dermal Fillers</Text>
        <View style={{ padding: 15 }}>
          <Text style={styles.itemPickText}>What dermal fillers can do</Text>
          <Text>
            {"\n"}Plump thin lips{"\n"}
            {"\n"}Enhance shallow contours{"\n"}
            {"\n"}Soften facial creases and wrinkles{"\n"}
            {"\n"}Improve the appearance of recessed scars{"\n"}
            {"\n"}Reconstruct contour deformities in the face{"\n"}
            {"\n"}Decrease or remove the shadow of the lower lids{"\n"}
          </Text>
          <Text>
            Dermal fillers can be very helpful in those with early signs of
            aging, or as a value-added part of facial rejuvenation surgery.
          </Text>
        </View>
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
  },
  imgSizer: {
    width: "100%",
    height: hp("45%"),
    marginTop: 15
  }
});

export default DermalFillers;
