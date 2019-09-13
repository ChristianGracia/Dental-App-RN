import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Orthodontics extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Orthodontics</Text>
        <View>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://www.readersdigest.ca/wp-content/uploads/sites/14/2010/10/does-your-child-really-need-braces-1200x1200.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            At Advanced Dental Care of Norton we have our own in-house
            orthodontist and these are the services we provide:{"\n"}
          </Text>
          <Text style={styles.itemHeader}>Adult Orthodontics</Text>
          <Text style={styles.itemPickText}>
            {" "}
            {"\n"}
            Orthodontic treatments today are no longer just for kids. Many
            adults are choosing to have orthodontic treatments not only to
            correct dental issues that may have affected their oral health, but
            also for the cosmetic benefits of straight teeth. Orthodontic
            treatments for adults include both traditional and clear braces and,
            for those who want to be more discrete with their treatment, clear
            aligners. While traditional braces for adults work the same as those
            for children, the length of the treatment time may be longer. {"\n"}
          </Text>
          <Text style={styles.itemHeader}>Teen Orthodontics</Text>
          <Text style={styles.itemPickText}>
            {" "}
            {"\n"}
            The teen years are a suitable time to begin orthodontic treatments.
            The bone in the jaw of a teenager is still moldable by moving teeth
            because it has not yet set in its shape. Gaps, crooked teeth,
            overcrowding of teeth and improper alignment of bites can all be
            corrected during the teenage years. While no teenager looks forward
            to wearing braces for a year or two, there have been advances in
            orthodontic technology that gives more choices for orthodontic teeth
            straightening like metal vs ceramic braces and the choice of the
            color combination of the tiny rubber bands. {"\n"}
          </Text>
          <Text style={styles.itemHeader}>Traditional Braces</Text>
          <Text style={styles.itemPickText}>
            {" "}
            {"\n"}
            When you hear the term braces, it is usually in reference to the
            traditional braces that require the use of metal wires and brackets.
            These braces are typically recommended for cases requiring more
            severe correction as a result of their durability.{"\n"}
          </Text>
          <Text style={styles.itemHeader}>Six Month Smiles</Text>
          <Text style={styles.itemPickText}>
            {" "}
            {"\n"}
            The Six Month Smiles Bracing System is a clear bracing system for
            adults. Most adults do not want the hassle of having to walk around
            with visible braces for an extended period of time. With the Six
            Month Smiles system, clear braces are used and the primary focus is
            on the cosmetic appearance of the teeth that are visible in your
            smile, and not the position of your bite. Therefore, one can have
            their teeth straightened in just around six months! {"\n"}
          </Text>
          <Text style={styles.itemHeader}>Fastbraces®</Text>
          <Text style={styles.itemPickText}>
            {"\n"}
            The Fastbraces® Technology straightens the teeth differently from
            traditional braces. Unlike the latter which aligns the crown of the
            teeth first, then addresses the positioning of the root of the
            tooth, Fastbraces®, from the beginning of treatment, works to
            correct the position of the root of the tooth. As a result of this,
            treatment using the Fastbraces® Technology tend to be completed
            faster than that of traditional braces. {"\n"}
          </Text>
          <Text style={styles.itemHeader}>Invisalign</Text>
          <Text style={styles.itemPickText}>
            {" "}
            {"\n"}
            Many adults simply do not like having to deal with wires and
            brackets, and for them, Invisalign has been the proven choice.
            Unlike the other bracing systems which uses either metal or clear
            braces, Invisalign uses a series of custom-made aligners that are
            not only so clear that they are almost invisible, but they can also
            be removed for eating, drinking, and normal brushing and flossing of
            the teeth! {"\n"}
          </Text>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {" "}
            {"\n"}
            At Advanced Dental Care of Norton, we customize individualized
            treatment plans based on our patients needs, to get the best
            results, using the best suited system. Call us today to schedule a
            consultation.
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
    alignItems: "center",
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

export default Orthodontics;
