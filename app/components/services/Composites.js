import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Composites extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Composites</Text>
        <View>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://completedentalhealthmi.com/wp-content/uploads/2019/05/white-filling-vs-silver-filling.png"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            Composites are tooth colored resin fillings that are used in small
            to midsize cavities that provide durability and resistance to
            fractures and allow a tooth to withstand the pressure that comes
            from chewing.
            {"\n"}
            {"\n"}
            These fillings can not only be used to fill cavities but also can be
            used to change the color of teeth and reshape disfigured teeth.
            {"\n"}
            {"\n"}
            Composites are a good choice for people who want their teeth to look
            natural because the alternatives (like amalgam fillings) are easy to
            look at and tell that work was done on the tooth.
            {"\n"}
            {"\n"}
            Composite fillings usually take longer to place then a metal
            (amalgam) filling because the tooth is needed to be kept clean and
            dry during the procedure.
            {"\n"}
            {"\n"}
            Composite fillings are now used more than metal alternatives because
            most people want fillings that match the color of their natural
            teeth. At our office we use a shade guide to match our many shades
            of composite resins to the natural color of our patient’s teeth.
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
  }
});

export default Composites;
