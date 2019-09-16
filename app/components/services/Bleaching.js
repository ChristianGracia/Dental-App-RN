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

          <Text style={styles.bleachHeader}>Glo</Text>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/0578/0981/products/GloPro_TakeHomeKit_WithComponents_NEW_BOX_NewGvials_1024x1024@2x.jpg?v=1554404856"
            }}
          />
          <Text
            style={{
              ...styles.itemPickText,
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            {"\n\n"}
            Our most powerful whitener!{"\n\n"}
          </Text>

          <Text style={styles.bleachHeader}>Sheer White Strips</Text>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "http://cdn.shopify.com/s/files/1/0725/9041/products/sheer_white_600x.jpeg?v=1527097490"
            }}
          />
          <Text style={styles.itemPickText}>
            Sheer White Whitening Strips are teeth whitening strips that are
            worn for just 1-2 hours and acheive noticable whitening results.
          </Text>

          <Text style={styles.itemHeader}>No impressions needed!</Text>

          <Text style={styles.itemPickText}>
            These strips stick and mold perfectly to the teeth, becoming almost
            invisible.
            {"\n\n"}
            Not only are they comfortable to wear during any activity, including
            talking or drinking cold beverages, but they also cause little or no
            sensitivity!
            {"\n\n"}These white strips made with 20% Carbamide Peroxide can
            usually make your teeth about 5 shades lighter in just 5 days!
          </Text>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://sleepsugar.com/wp-content/uploads/2017/01/Woman-placing-whitening-strip-on-top-teeth.jpg"
            }}
          />

          <Text style={styles.itemHeader}>How to use</Text>
          <Text style={styles.itemPickText}>
            • Open package, whitening formula is face up.
            {"\n\n"}• Remove strip from tray.
            {"\n\n"}• Center strip, place top edge of strip at gum line.
            {"\n\n"}• Fold strip to back side of teeth. Press firmly on all
            surfaces. Warmth and moisture from your mouth will mold the strip to
            your teeth.
            {"\n\n"}• Wear for 1-2 hours. May continue to speak, do light
            activities, and drink cool beverages.
            {"\n\n"}• To remove, grasp one corner and pull down away from the
            front of teeth, then push strip away from the back of teeth.
            {"\n\n"}• Brush or rinse away any remaining gel
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
  },
  bleachHeader: {
    color: iOSColors.blue,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center"
  }
});

export default Bleaching;
