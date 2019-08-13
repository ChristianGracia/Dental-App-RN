import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Crowns extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Crowns</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={{ width: "100%", height: hp("45%"), marginTop: 15 }}
            resizeMode="contain"
            source={{
              uri:
                "https://www.news-medical.net/image.axd?picture=2017%2F8%2Fshutterstock_611274782.jpg"
            }}
          />

          <Text style={styles.itemPickText}>
            <Text>
              {"\n"}A crown is a cover or “cap” for your tooth that restores the
              tooth’s normal shape, size, function, and appearance.
              {"\n"}
              {"\n"}
              Once a crown is cemented, it covers the entire visible portion of
              a tooth above the gum line.
              {"\n"}
              {"\n"}
              There are many reasons why a dentist may recommend a crown:
              {"\n"}
              {"\n"}
            </Text>
            <Text style={{ color: "red" }}>1{")"}</Text>{" "}
            <Text>
              To protect a weak tooth from breaking due to decay or fractures
            </Text>
            {"\n"}
            {"\n"}
            <Text style={{ color: "red" }}>2{")"}</Text>{" "}
            <Text>Restore an already broken tooth</Text>
            {"\n"}
            {"\n"}
            <Text style={{ color: "red" }}>3{")"}</Text>{" "}
            <Text>To cover and support a tooth with a large cavity</Text>
            {"\n"}
            {"\n"}
            <Text style={{ color: "red" }}>4{")"}</Text>{" "}
            <Text>To hold a dental bridge in place</Text>
            {"\n"}
            {"\n"}
            <Text style={{ color: "red" }}>5{")"}</Text>{" "}
            <Text>To cover discolored or disfigured tooth</Text>
            {"\n"}
            {"\n"}
            <Text style={{ color: "red" }}>6{")"}</Text>{" "}
            <Text>To cover a dental implant</Text>
            {"\n"}
            {"\n"}
            <Text style={{ color: "red" }}>7{")"}</Text>{" "}
            <Text>To make a tooth look better</Text>
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              Types of Crowns
            </Text>
            {"\n"}
            {"\n"}
            <Text>
              <Text>
                Permanent crowns can be made from stainless steel, all metal
                (such as gold or another alloy), porcelain-fused-to-metal, all
                resin, or all ceramic.
              </Text>
              {"\n"}
              {"\n"}
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                Stainless steel crowns:
              </Text>
              {"\n"}
              <Text>
                Stainless steel crowns are prefabricated crowns that are used on
                permanent teeth primarily as a temporary measure. The crown
                protects the tooth or filling while a permanent crown is made
                from another material. The crown covers the entire tooth and
                protects it from further decay. In general, stainless steel
                crowns are used for children's teeth because they don't require
                multiple dental visits to put in place and so are more cost-
                effective than custom-made crowns and prophylactic dental care
                needed to protect a tooth without a crown.
                {"\n"}
                {"\n"}
              </Text>
              <Text style={{ color: "blue", fontWeight: "bold" }}>Metals:</Text>
              {"\n"}
              <Text>
                Metals used in crowns include alloys that have a high content of
                gold or platinum, or base-metal alloys (for example, cobalt-
                chromium and nickel-chromium alloys). Metal crowns withstand
                biting and chewing forces well and probably last the longest in
                terms of wear down. Also, metal crowns rarely chip or break. The
                metallic color is the main drawback. Metal crowns are a good
                choice for out-of-sight molars.
              </Text>
              {"\n"}
              {"\n"}
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                Porcelain-fused-to-metal:
              </Text>
              {"\n"}
              <Text>
                Porcelain-fused-to-metal dental crowns can be color matched to
                your adjacent teeth (unlike the metallic crowns). However, more
                wearing to the opposing teeth occurs with this crown type
                compared with metal or resin crowns. The crown's porcelain
                portion can also chip or break off. Next to all-ceramic crowns,
                porcelain-fused-to-metal crowns look most like normal teeth.
                However, sometimes the metal underlying the crown's porcelain
                can show through as a dark line, especially at the gum line and
                even more so if your gums recede. These crowns can be a good
                choice for front or back teeth as well as long bridges where the
                metal is needed for strength.
                {"\n"}
                {"\n"}
              </Text>
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                All-resin:
              </Text>
              {"\n"}
              <Text>
                All-resin dental crowns are less expensive than other crown
                types. However, they wear down over time and are more prone to
                fractures than porcelain-fused-to-metal crowns.
                {"\n"}
                {"\n"}
              </Text>
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                All-ceramic or all-porcelain:
              </Text>
              {"\n"}
              <Text>
                All-ceramic or all-porcelain dental crowns provide better
                natural color match than any other crown type and may be more
                suitable for people with metal allergies. All-ceramic crowns can
                be used for front and back teeth.
                {"\n"}
                {"\n"}
              </Text>
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                Temporary/Permanent:
              </Text>
              {"\n"}
              <Text>
                Temporary crowns can be made in your dentist's office, whereas
                most permanent crowns are made in a dental laboratory.
                Typically, temporary crowns are made of an acrylic-based
                material or stainless steel and can be used as a temporary
                restoration until a permanent crown is constructed by a lab.
              </Text>
            </Text>
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
  }
});
export default Crowns;
