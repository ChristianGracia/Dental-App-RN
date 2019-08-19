import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Bleaching extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Bleaching</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={{ width: "100%", height: hp("45%"), marginTop: 15 }}
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2015/05/teeth-whitening.jpg"
            }}
          />
          <Text style={styles.itemPickText}>Bleaching text goes here</Text>
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
  }
});

export default Bleaching;
