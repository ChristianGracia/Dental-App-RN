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
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.headerDiv}>
              <Text style={styles.header}>myADC</Text>
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={require("../../assets/main.jpg")}
                style={styles.logoStyle}
              />
            </View>
            <View style={styles.imgDiv} />
            <View style={styles.contactBox}>
              <View style={styles.callContainer}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => Linking.openURL(`tel:5086228777`)}
                >
                  <Text style={styles.callButtonText}>Click to call us</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.emailContainer}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() =>
                    Linking.openURL(
                      "mailto:office@adcofnorton.com?subject=App-email"
                    )
                  }
                >
                  <Text style={styles.callButtonText}>Click to email us</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.directionsContainer}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() =>
                    Linking.openURL(
                      "https://www.google.com/maps/place/Advanced+Dental+Care+of+Norton/@41.9615083,-71.2001785,17z/data=!3m1!4b1!4m5!3m4!1s0x89e461d156c36c9f:0xb5fcf264919e17a5!8m2!3d41.9615083!4d-71.1979898"
                    )
                  }
                >
                  <Text style={styles.callButtonText}>
                    Click for directions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  headerDiv: {
    backgroundColor: "#fcec01",
    height: 90,
    flex: 1
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#114260",
    marginTop: 15
  },
  logoStyle: {
    width: wp("100%"),
    height: hp("40%")
  },
  imgContainer: {
    paddingTop: 70,
    alignContent: "center"
  },
  callButtonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",

    textAlign: "center"
  },

  callButton: {
    backgroundColor: "#fcec01"
  },
  imgDiv: {
    paddingBottom: 20
  },
  emailContainer: {
    flex: 1,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: wp("80%")
  },
  directionsContainer: {
    flex: 1,
    marginTop: 7,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: wp("80%")
  },

  callContainer: {
    flex: 1,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: wp("80%")
  },
  contactBox: {
    alignItems: "center"
  }
});

export default Home;
