import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Dentures extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Dentures</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "http://familydentistry.webhost.io/wp-content/uploads/2016/07/Dentures-sets-300x300.jpg"
            }}
          />
          <Text style={styles.itemPickText}>Dentures text goes here</Text>
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

export default Dentures;
