import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class DermalFillers extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Dermal Fillers</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "http://www.goenerplex.com/wp-content/uploads/2019/03/Dermal-Fillers-1024x609-673x400.jpg"
            }}
          />
          <Text>About:</Text>
          <Text>
            {"\n\n"}
            Juvederm is a cosmetic treatment referred to as a filler. It’s used
            to restore facial contours and improve signs of aging. It’s an
            injectable dermal filler with a base of hyaluronic acid. {"\n\n"}
            It’s a treatment that focuses on the face, specifically the cheeks,
            lips, and around the mouth. The procedure to inject the product
            takes 15 to 60 minutes. {"\n\n"}It’s one of the most common
            nonsurgical cosmetic procedures done in the U.S.
          </Text>
          <Text style={styles.itemPickText}>What dermal fillers can do</Text>
          <Text>
            {"\n"}Plump thin lips{"\n"}
            {"\n"}Enhance shallow contours{"\n"}
            {"\n"}Soften facial creases and wrinkles{"\n"}
            {"\n"}Improve the appearance of recessed scars{"\n"}
            {"\n"}Reconstruct contour deformities in the face{"\n"}
            {"\n"}Decrease or remove the shadow of the lower lids{"\n"}
          </Text>
          <Text>
            Dermal fillers can be very helpful in those with early signs of
            aging, or as a value-added part of facial rejuvenation surgery.
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            Results are often noticeable immediately after a procedure and can
            last one to two years.
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>How does Juvederm work? </Text>
            Juvederm works by adding volume to the facial tissue through its
            active ingredient, hyaluronic acid. Hyaluronic acid is a natural
            substance found in the human body. It stimulates the production of
            the connective tissue that plumps the skin (collagen). As you get
            older, the production of hyaluronic acid and collagen decreases.
            This increases the appearance of sagging and wrinkling of the facial
            skin. During the procedure, your doctor, physician assistant, or
            nurse typically uses a pen to mark the areas to be treated. Your
            doctor will then inject Juvederm into the target area. They will
            also lightly massage the area to ensure an even distribution and
            reduce the chance of swelling. The entire procedure usually takes
            between 15 and 60 minutes, depending on the area treated. Juvederm
            injections contain a small amount of pain-reducing lidocaine. This
            will help minimize any pain or discomfort you feel during treatment
            and make it go away quickly.
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

export default DermalFillers;
