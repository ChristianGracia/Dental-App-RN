import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Botox extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Botox</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://www.tidewaterskincare.com/wp-content/uploads/2018/03/Botox-1.jpg"
            }}
          />
          <Text style={styles.itemPickText}>Botox text goes here</Text>
          <Text>
            Botox injections are noted primarily for the ability to reduce the
            appearance of facial wrinkles. They're also used to treat conditions
            such as neck spasms (cervical dystonia), excessive sweating
            (hyperhidrosis), an overactive bladder and lazy eye.{"\n\n"}Botox
            injections may also help prevent chronic migraines. Botox injections
            use a toxin called onobotulinumtoxinA to temporarily prevent a
            muscle from moving. This toxin is produced by the microbe that
            causes botulism, a type of food poisoning.{"\n\n"}Botox was the
            first drug to use botulinum toxin. Other products now include
            abobotulinumtoxinA (Dysport), rimabotulinumtoxinB (Myobloc) and
            incobotulinumtoxinA (Xeomin). Each is a little different,
            particularly when it comes to dosage units, so they aren't
            interchangeable.
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
  }
});

export default Botox;
