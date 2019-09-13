import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CrownTypes extends Component {
  render() {
    return (
      <View style={{ padding: 15 }}>
        <Text>
          <Text style={styles.itemPickText}>
            Permanent crowns can be made from stainless steel, all metal (such
            as gold or another alloy), porcelain-fused-to-metal, all resin, or
            all ceramic.
          </Text>
          {"\n"}
          {"\n"}
          <Text style={styles.typeHeader}>Stainless steel crowns:</Text>
          {"\n\n"}
          <Text style={styles.itemPickText}>
            Stainless steel crowns are prefabricated crowns that are used on
            permanent teeth primarily as a temporary measure. The crown protects
            the tooth or filling while a permanent crown is made from another
            material. The crown covers the entire tooth and protects it from
            further decay. In general, stainless steel crowns are used for
            children's teeth because they don't require multiple dental visits
            to put in place and so are more cost- effective than custom-made
            crowns and prophylactic dental care needed to protect a tooth
            without a crown.
            {"\n"}
            {"\n"}
          </Text>
          <Text style={styles.typeHeader}>Metals:</Text>
          {"\n\n"}
          <Text style={styles.itemPickText}>
            Metals used in crowns include alloys that have a high content of
            gold or platinum, or base-metal alloys (for example, cobalt-
            chromium and nickel-chromium alloys). Metal crowns withstand biting
            and chewing forces well and probably last the longest in terms of
            wear down. Also, metal crowns rarely chip or break. The metallic
            color is the main drawback. Metal crowns are a good choice for
            out-of-sight molars.
          </Text>
          {"\n"}
          {"\n"}
          <Text style={styles.typeHeader}>Porcelain-fused-to-metal:</Text>
          {"\n\n"}
          <Text style={styles.itemPickText}>
            Porcelain-fused-to-metal dental crowns can be color matched to your
            adjacent teeth (unlike the metallic crowns). However, more wearing
            to the opposing teeth occurs with this crown type compared with
            metal or resin crowns. The crown's porcelain portion can also chip
            or break off. Next to all-ceramic crowns, porcelain-fused-to-metal
            crowns look most like normal teeth. However, sometimes the metal
            underlying the crown's porcelain can show through as a dark line,
            especially at the gum line and even more so if your gums recede.
            These crowns can be a good choice for front or back teeth as well as
            long bridges where the metal is needed for strength.
            {"\n"}
            {"\n"}
          </Text>
          <Text style={styles.typeHeader}>All-resin:</Text>
          {"\n\n"}
          <Text style={styles.itemPickText}>
            All-resin dental crowns are less expensive than other crown types.
            However, they wear down over time and are more prone to fractures
            than porcelain-fused-to-metal crowns.
            {"\n"}
            {"\n"}
          </Text>
          <Text style={styles.typeHeader}>All-ceramic or all-porcelain:</Text>
          {"\n\n"}
          <Text style={styles.itemPickText}>
            All-ceramic or all-porcelain dental crowns provide better natural
            color match than any other crown type and may be more suitable for
            people with metal allergies. All-ceramic crowns can be used for
            front and back teeth.
            {"\n"}
            {"\n"}
          </Text>
          <Text style={styles.typeHeader}>Temporary/Permanent:</Text>
          {"\n\n"}
          <Text style={styles.itemPickText}>
            Temporary crowns can be made in your dentist's office, whereas most
            permanent crowns are made in a dental laboratory. Typically,
            temporary crowns are made of an acrylic-based material or stainless
            steel and can be used as a temporary restoration until a permanent
            crown is constructed by a lab.
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  typeHeader: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
    paddingBottom: 15
  },
  itemPickText: {
    paddingTop: 10,
    color: "#114260",
    fontSize: 20,
    padding: 15
  }
});
