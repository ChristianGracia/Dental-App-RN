import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { iOSColors } from "react-native-typography";

class Bleaching extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Bleaching</Text>
        <View>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2015/05/teeth-whitening.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            At Advanced Dental Care of Norton we can help make your teeth
            whiter!{"\n\n"}
            As we get older and consume known stain causing items such as
            coffee, wine, food, and tobacco, our teeth becoming less white is
            inevitable.{"\n\n"}
            But the good news is that you can do something about it!{"\n"}
          </Text>
          <Text style={styles.itemHeader}>Bleaching Solutions</Text>
          <Text style={styles.itemPickText}>
            {"\n"}Currently we offer two solutions to patients that want white
            their teeth.
          </Text>
          <View style={{ textAlign: "center", alignItems: "center" }}>
            <Text
              style={{
                color: iOSColors.blue,
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              Glo Whitening
            </Text>
            <Text
              style={{
                color: iOSColors.blue,
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              Sheer White Strips
            </Text>
          </View>
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

export default Bleaching;
