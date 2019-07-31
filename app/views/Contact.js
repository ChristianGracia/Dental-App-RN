import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  WebView,
  Linking
} from "react-native";
import { SafeAreaView } from "react-navigation";

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
            <Text style={styles.header}>Contact</Text>
          </View>
          <Text>Forms</Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.ident.ws/template_include/new_patient_sign_in.do?site=14740&practiceId=22404"
              )
            }
          >
            <Text>New Patient Form</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.adcofnorton.com/Content/Patient-Forms/Financial-Policy-2012.pdf"
              )
            }
          >
            <Text>Financial Policy Form</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.adcofnorton.com/Content/Patient-Forms/ADC-Medical-Spa-Patient-Information.pdf"
              )
            }
          >
            <Text>Spa Patient Form</Text>
          </TouchableOpacity>
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
  }
});

export default Contact;
