import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Linking,
  Text,
  StyleSheet
} from "react-native";

export default class Forms extends Component {
  render() {
    return (
      <View>
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
    );
  }
}
const styles = StyleSheet.create({
  formsText: {
    marginTop: 10,
    padding: 15,
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
    textAlign: "center"
  }
});
