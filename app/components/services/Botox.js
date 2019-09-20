import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Botox extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Botox</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://live.staticflickr.com/8112/8657527278_292bae0920.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            Botox injections use onobotulinumtoxinA to temporarily prevent a
            muscle from moving.
            {"\n\n"}Botox injections are not only used to reduce the appearance
            of facial wrinkles, but can also be used to treat conditions such as
            neck spasms (cervical dystonia), excessive sweating (hyperhidrosis),
            overactive bladder, lazy eye, and can help prevent chronic
            migraines.
            {"\n\n"}Compared to Dysport, the effects of Dysport may show up
            sooner, but Botox may last longer.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#114260",
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
  },
  itemHeader: {
    color: "#114260",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fcec01"
  }
});

export default Botox;
