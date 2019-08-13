import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class AestheticSpa extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Aesthetic Spa</Text>
        <Image
          style={{ width: "100%", height: hp("45%"), marginTop: 15 }}
          resizeMode="contain"
          source={{
            uri:
              "https://www.adcofnorton.com/images/Norton-MA-Botox-Dysport.jpg"
          }}
        />
        <Text style={styles.itemPickText}>
          {"\n"}
          Here at ADC of Norton we have an in-house Aesthetic Spa. With our team
          of skilled nurses, we offer Botox, Dysport, and Dermal Fillers.
          {"\n"}
          {"\n"}
          Botox and Dysport are both safe and effective treatments for moderate
          to severe wrinkles.
          {"\n"}
          {"\n"}
          These treatments reduce the appearance of wrinkles by relaxing the
          underlying muscles beneath the skin which results in smoother skin.
          {"\n"}
          {"\n"}
          Both treatments have the same active ingredient but have their
          differences.
          {"\n"}
          {"\n"}
          More information about Botox, Dysport, and Dermal Fillers can be found
          on our list of services.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 20
  },
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    color: "red",
    paddingTop: 20
  }
});

export default AestheticSpa;
