import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Dentures extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Dentures</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "http://familydentistry.webhost.io/wp-content/uploads/2016/07/Dentures-sets-300x300.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            <Text>
              Dentures are removable appliances that can replace missing teeth
              and help restore your smile. If you’ve lost all of your natural
              teeth, whether from gum disease, tooth decay or injury, replacing
              missing teeth will benefit your appearance and your health. That’s
              because dentures make it easier to eat and speak better than you
              could without teeth—things that people often take for granted.
              {"\n\n"}When you lose all of your teeth, facial muscles can sag,
              making you look older. Dentures can help fill out the appearance
              of your face and profile. They can be made to closely resemble
              your natural teeth so that your appearance does not change much.
              Dentures may even improve the look of your smile.
            </Text>
            <Text>
              Types of dentures:{"\n\n"}
              Conventional{"\n\n"}
              This full removable denture is made and placed in your mouth after
              the remaining teeth are removed and tissues have healed, which may
              take several months.{"\n\n"}
              Immediate{"\n\n"}
              This removable denture is inserted on the same day that the
              remaining teeth are removed. Your dentist will take measurements
              and make models of your jaw during a preliminary visit. You don’t
              have to be without teeth during the healing period, but may need
              to have the denture relined or remade after your jaw has healed.
              {"\n\n"} Overdenture{"\n\n"}
              Sometimes some of your teeth can be saved to preserve your jawbone
              and provide stability and support for the denture. An overdenture
              fits over a small number of remaining natural teeth after they
              have been prepared by your dentist. Implants can serve the same
              function, too.
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
  },
  imgSizer: {
    width: "100%",
    height: hp("45%"),
    marginTop: 15
  }
});

export default Dentures;
