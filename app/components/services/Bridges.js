import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { iOSColors } from "react-native-typography";

class Bridges extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Bridges</Text>
        <View style={{}}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://westcoastinternational.com/wp-content/uploads/2018/05/dental-bridges.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            Dental bridges lliterally bridge the gap created by one or more
            missing teeth.{"\n\n"}A bridge is made up of two or more crowns for
            the teeth on either side of the gap. The two or more anchoring teeth
            are called abutment teeth and contain a false tooth/teeth in
            between. These false teeth are called pontics and can be made from
            gold, alloys, porcelain, or a combination of these materials. Dental
            bridges are supported by natural teeth or implants.{"\n\n"}
          </Text>
          <View style={{ width: "100%" }}>
            <Text style={styles.itemHeader}>Bridges can...</Text>
          </View>

          <Text
            style={{
              fontWeight: "bold",
              color: iOSColors.blue,
              fontSize: 18,
              padding: 15
            }}
          >
            {"\n\n"}
            Restore your smile
            {"\n\n"}Restore the ability to properly chew and speak
            {"\n\n"}
            Maintain the shape of your face
            {"\n\n"}Distribute the forces in your bite properly by replacing
            missing teeth
            {"\n\n"}Prevent remaining teeth from drifting out of position
            {"\n\n"}
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

export default Bridges;
