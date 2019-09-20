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
        <View style={{}}>
          <Text style={styles.itemPickText}>
            At Advanced Dental Care of Norton we a few different types of
            sedation available to allow our patient's to relax or feel more
            comfortable during our procedures.{"\n\n"}
            Whether you are having an extensive full mouth rehabilitation
            surgery or just experience dental-phobia sedation can be used to
            make the procedure stress free.
          </Text>
          <Text style={styles.itemPickText}>
            We offer nitrous oxide (laughing gas), IV, oral concious, and deep
            sedation to help even our most anxious patients!
          </Text>
          <Image
            style={styles.imgSizer}
            resizeMode="cover"
            source={{
              uri:
                "https://live.staticflickr.com/4846/45006886305_6dcec4ba65_b.jpg"
            }}
          />
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
  imgSizer: {
    width: wp("100%"),
    height: hp("70%"),
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

export default Sedation;
