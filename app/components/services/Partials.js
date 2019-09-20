import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { iOSColors } from "react-native-typography";

class Partials extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Partial Dentures</Text>
        <View style={{}}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6SvJSz85siKS2H0mXkufvdFoZb77X54TvWMbDWUU_agG4MtV"
            }}
          />
          <Text style={styles.itemPickText}>
            A removable partial denture usually consists of replacement teeth
            attached to a pink or gum-colored plastic base and can be connected
            by metal framework that holds the denture in place in the mouth.
            {"\n\n"}Partial dentures are used when one or more natural teeth
            remain in the upper or lower jaw. Not only does a partial denture
            fill in the spaces created by missing teeth, it prevents other teeth
            from changing position.
          </Text>
          <Text style={{ ...styles.itemPickText, color: iOSColors.blue }}>
            Partial dentures are a great way to cover missing teeth and restore
            your smile!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#114260",
    fontSize: 20,
    padding: 15
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
  itemHeader: {
    color: "#114260",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fcec01"
  },
  imgSizer: {
    width: "100%",
    height: hp("45%"),
    marginTop: 15
  }
});

export default Partials;
