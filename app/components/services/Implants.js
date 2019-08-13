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
        <Text style={styles.itemPick}>Implants</Text>
        <View style={{ padding: 15 }}>
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
                "https://i1.wp.com/kentuckyperio.com/wp-content/uploads/2015/08/iStock-543979766-2.jpg?fit=2000%2C1500&ssl=1"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>
              What are Dental Implants?
            </Text>
            {"\n\n"}
            Dental implants are metal posts or frames that are surgically
            positioned into the jawbone beneath your gums. Once in place, they
            allow your dentist to mount replacement teeth onto them.
            {"\n\n"}At Advanced Dental Care of Norton, we have successfully
            placed thousands of implants with Dr. Gracia placing implants for
            over 25 years.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>
              How do Dental Implants Work?
            </Text>{" "}
            {"\n\n"}
            Because implants fuse to your jawbone, they provide stable support
            for artificial teeth. Dentures and bridges mounted to implants won't
            slip or shift in your mouth — an especially important benefit when
            eating and speaking. This secure fit helps the dentures and bridges
            — as well as individual crowns placed over implants — feel more
            natural than conventional bridges or dentures.
            <Image
              style={{
                width: wp("80%"),
                height: hp("50%"),
                marginLeft: wp("25%"),
                marginRight: wp("25%")
              }}
              resizeMode="contain"
              source={{
                uri:
                  "https://www.aaid-implant.org/assets/1/7/Implant_Basics_Diagram.png"
              }}
            />
            {"\n\n"}For some people, ordinary bridges and dentures are simply
            not comfortable or even possible, due to sore spots, poor ridges or
            gagging. In addition, ordinary bridges must be attached to teeth on
            either side of the space left by the missing tooth. An advantage of
            implants is that no adjacent teeth need to be prepared or ground
            down to hold your new replacement tooth/teeth in place.
            {"\n\n"}To receive implants, you need to have healthy gums and
            adequate bone to support the implant. You must also commit to
            keeping these structures healthy. Meticulous oral hygiene and
            regular dental visits are critical to the long-term success of
            dental implants.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20,
    alignItems: "center"
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

export default Implants;
