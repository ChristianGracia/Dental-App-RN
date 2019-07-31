import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Linking
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.headerDiv}>
            <Text style={styles.header}>myADC</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require("../../assets/main.jpg")}
              style={styles.logoStyle}
            />
            <View style={styles.imgDiv} />
            <View style={styles.callContainer}>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => Linking.openURL(`tel:5086228777`)}
              >
                <Text style={styles.callButtonText}>
                  Click here to call us!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  headerDiv: {
    backgroundColor: "#fcec01",
    height: 90
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#114260",
    marginTop: 15
  },
  logoStyle: {
    height: hp("30%"),
    width: wp("95%")
  },
  imgContainer: {
    paddingTop: 70,
    alignItems: "center"
  },
  callButtonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    width: wp("70%"),
    textAlign: "center"
  },
  callContainer: {
    paddingTop: 40,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  callButton: {
    backgroundColor: "#fcec01"
  },
  imgDiv: {
    paddingBottom: 30
  }
});

export default Home;
