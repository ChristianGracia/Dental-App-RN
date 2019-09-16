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
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://d11upr8lrcn9x7.cloudfront.net/www.aspenwooddental.com/s3fs-public/sedation-dentistry-infographic.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            At Advanced Dental Care of Norton we a few different types of
            sedation available to allow our patient's to relax or feel more
            comfortable during our procedures.{"\n\n"}
            Whether you are having an extensive full mouth rehabilitation
            surgery or just experience dental-phobia sedation can be used to
            make the procedure stress free
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
