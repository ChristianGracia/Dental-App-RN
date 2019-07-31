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
