import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Pediatrics extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Pediatric Dentistry</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri: "https://www.adcofnorton.com/Content/images/IMG_1783.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            At Advanced Dental Care of Norton, we have our own Pediatric
            Dentist!
            {"\n\n"}
            Pediatric Dentistry is the branch of dentistry which deals with the
            oral health of children from birth through adolescence, and also in
            the specialized care of “special needs” patients, such as those with
            autism, cerebral palsy, and mental retardation.
            {"\n\n"}
            Pediatric Dentistry focuses on the growth and development of the
            pediatric and adolescent patient, the management and prevention of
            oral disease and all aspects of pediatric restorative techniques.
            Also, because the pediatric dentist have to gain the trust and
            confidence of their patients in an effort to make the dental visit
            enjoyable, child psychology is emphasized as one of the main
            components of pediatric training.
            {"\n\n"}Pediatric Dentists are typically required to complete an
            extra two to three years of post-doctoral dental training, after
            which they are eligible for board certification by the American
            Board of Pediatric Dentistry. Pediatric dentists places special
            emphasis on the prevention of tooth decay, especially since there
            are studies which have shown that poor oral health in children can
            not only lead to impaired school performance, but also poor social
            relationships.
            {"\n\n"}In the same way that pediatricians are trained to meet a
            child's medical needs, our pediatric dentist is uniquely qualified
            to protect your child's oral health, using the most advanced
            techniques.
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

export default Pediatrics;
