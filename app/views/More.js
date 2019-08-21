import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  Label
} from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import CheckoutForm from "../components/CheckoutForm";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.headerDiv}>
            <Text style={{ ...styles.header, fontFamily: "Verdana-Bold" }}>
              Testing Font
            </Text>
          </View>
          <View style={styles.headerSpacing} />

          <View style={styles.formsContainer}>
            <Text style={styles.formHeader}>Forms</Text>
            <TouchableOpacity
              style={styles.formsText}
              onPress={() =>
                Linking.openURL(
                  "https://www.ident.ws/template_include/new_patient_sign_in.do?site=14740&practiceId=22404"
                )
              }
            >
              <Text style={styles.formButtonText}>New Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.formsText}
              onPress={() =>
                Linking.openURL(
                  "https://www.adcofnorton.com/Content/Patient-Forms/Financial-Policy-2012.pdf"
                )
              }
            >
              <Text style={styles.formButtonText}>Financial Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.formsText}
              onPress={() =>
                Linking.openURL(
                  "https://www.adcofnorton.com/Content/Patient-Forms/ADC-Medical-Spa-Patient-Information.pdf"
                )
              }
            >
              <Text style={styles.formButtonText}>Spa Patient Info</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.paypalHeader}>Pay your balance</Text>
            <TouchableOpacity
              style={styles.formsText}
              onPress={() => alert("paypal pressed")}
            >
              <Text style={styles.formButtonText}>Pay Now with llllll!</Text>
            </TouchableOpacity>
            <CheckoutForm />
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
  headerSpacing: {
    paddingTop: 30
  },
  formsContainer: {
    alignItems: "center",
    flex: 1
  },
  formHeader: {
    fontSize: 25,
    color: "#114260",
    fontWeight: "bold"
  },
  formsText: {
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
  formButtonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    width: wp("70%"),
    textAlign: "center"
  },
  paypalHeader: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 25,
    color: "#114260",
    fontWeight: "bold"
  }
});

export default Contact;
