import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import CrownTypes from "./CrownTypes";
import CrownReasons from "./CrownReasons";

class Crowns extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Crowns</Text>
        <View>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://www.news-medical.net/image.axd?picture=2017%2F8%2Fshutterstock_611274782.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            <Text>
              {"\n"}A crown is a cover or “cap” for your tooth that restores the
              tooth’s normal shape, size, function, and appearance.
              {"\n"}
              {"\n"}
              Once a crown is cemented, it covers the entire visible portion of
              a tooth above the gum line.
              {"\n"}
              {"\n"}
              There are many reasons why a dentist may recommend a crown:
            </Text>
          </Text>
          <CrownReasons />
          <Text style={styles.itemHeader}>Types of Crowns</Text>

          <CrownTypes />
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
export default Crowns;
