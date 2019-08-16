import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class AestheticSpa extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Aesthetic Spa</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={{ width: "100%", height: hp("45%"), marginTop: 15 }}
            resizeMode="contain"
            source={{
              uri:
                "https://www.adcofnorton.com/images/Norton-MA-Botox-Dysport.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            Here at ADC of Norton we have an in-house Aesthetic Spa. With our
            team of skilled nurses, we offer Botox, Dysport, and Dermal Fillers.
            {"\n"}
            {"\n"}
            <Text
              style={{
                color: "blue",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Botox/Dysport
            </Text>
            <Text>
              {"\n"}
              {"\n"}Botox and Dysport are both safe and effective treatments for
              moderate to severe wrinkles.
              {"\n"}
              {"\n"}
              These treatments reduce the appearance of wrinkles by relaxing the
              underlying muscles beneath the skin which results in smoother
              skin.
              {"\n"}
              {"\n"}
              Both treatments have the same active ingredient but have their
              differences.{"\n\n"}
            </Text>
            <Text
              style={{
                color: "blue",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              {" "}
              Botox/Dysport Uses:
            </Text>
            <Text style={{ color: "red", textAlign: "center" }}>
              {"\n"}
              {"\n"}
              Forehead Lines{"\n"}
              Frown Lines{"\n"}
              Brow Furrowing{"(11’s)\n"}
              Crow’s Feet{"\n"}
              Nose Lines {"(Bunny lines)\n"}
              Lip Flip{"\n"}
              Facial Contouring{"\n"}
              Dimpling Chin{"\n"}
              Relaxing Neck Bands{"\n"}
              GummySmiles{"\n"}
              Reduce Pores/Acne{"\n"}
              Migraines/Headaches{"\n"}
              TMJ Teeth Grinding{"\n"}
              Excessive Underarm Sweating{"\n"}
            </Text>
            <Text
              style={{
                color: "blue",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              {"\n\n"}
              Dermal Fillers:{"\n\n"}
            </Text>
            <Text>
              Dermal fillers help to replace lost volume, add contour, and help
              to diminish fine lines in the face. This gives the face a more
              youthful, rested appearance.
              {"\n\n"}Injectable fillers are made of hyaluronic acid, which is a
              material that is naturally within our own skin, tissues, and
              joints, and as we age, we begin to lose it. Hyaluronic acid
              moisturizes our skin, plays a role in elasticity, and give our
              faces volume and structure.
              {"\n\n"}Injectable fillers have a possibility of bruising,
              swelling, and/or tenderness at the site of injection for
              approximately five days. Depending on the type/brand, filler may
              last up to one year.
            </Text>
            <Text
              style={{
                color: "blue",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              {"\n\n"}
              Dermal Filler Uses:
              {"\n\n"}
            </Text>
            <Text style={{ color: "red", textAlign: "center" }}>
              Lips Cheeks{"\n"}
              Nasolabial Folds{"\n"}
              Marionet Lines{"\n"}
              Smoker Lines{"\n"}
              Acne Scars{"\n"}
              Under Eye {"(Hollow eyes)\n"}
              Jawline Contouring Chin Temples{"\n"}
            </Text>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              {"\n\n"}More information about Botox, Dysport, and Dermal Fillers
              can be found on our list of services.
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

export default AestheticSpa;
