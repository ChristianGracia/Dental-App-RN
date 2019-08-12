import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Implants extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: "100%",
            height: hp("45%"),
            marginTop: 15,
            paddingLeft: wp("5%")
          }}
          resizeMode="contain"
          source={{
            uri:
              "https://www.aspendental.com/-/media/aspendentaldotcom/ada-content/dental-implants/new-implants/implant_1.jpg?h=252&w=400&la=en&hash=D1211062CEC935D9CC3DEA947CE1CF47"
          }}
        />
        <Text style={styles.itemPickText}>{"\n"}Implants text goes here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 20
  }
});

export default Implants;
