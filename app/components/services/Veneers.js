import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Veneers extends Component {
  render() {
    return (
      <View style={{ padding: 15 }}>
        <Text style={styles.itemPick}>Veneers</Text>
        <Image
          style={{
            width: "100%",
            height: hp("45%"),
            marginTop: 15
          }}
          source={{
            uri:
              "https://www.dentalhealth.org/GetImage.aspx?IDMF=f95a3006-fe99-4190-9d4c-67d97e9c347f&w=400&h=549&src=mc"
          }}
          resizeMode="contain"
        />
        <Text style={styles.itemPickText}>
          {"\n"}
          Veneers are a thin layer of porcelain/composite material that is
          designed to fit over the front surface of a tooth.
          {"\n"}
          {"\n"}
          Veneers can improve the color, shape, position of tooth, and close
          gaps that would normally require braces.
          {"\n"}
          {"\n"}
          First a small amount of enamel (just enough to fit the Veneer) is
          removed from the tooth where the Veneer is being placed. This is done
          so that once the Veneer is placed, the tooth will be its normal size.
          {"\n"}
          {"\n"}
          Then an impression will be taken and a Veneer will be created by our
          lab and matched to the color of your surrounding teeth.
          {"\n"}
          {"\n"}
          Veneers can last for a very long time and quickly help solve problem
          areas in your smile.
        </Text>
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

export default Veneers;
