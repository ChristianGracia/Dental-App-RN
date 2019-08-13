import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class SleepApnea extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Sleep Apnea</Text>
        <Text style={styles.itemPickText}>
          Sleep apnea is an extremely serious condition that causes a person to
          wake up constantly throughout the night from respiratory disturbances
          like sleep apnea (when you stop breathing).
          {"\n"}
          {"\n"}
          Sleep apnea will cause medical conditions to occur, and existing
          medical conditions to worsen or make more difficult for you and your
          doctor to manage.
          {"\n"}
          {"\n"}
          Hypertension (high blood pressure, eventually renal failure),
          diabetes, heart failure, and stroke are very common in people who
          suffer from sleep apnea.
          {"\n"}
          {"\n"}
          <Text style={{ color: "red", fontWeight: "bold" }}>
            Symptoms of Sleep Apnea:
          </Text>
          {"\n"}
          {"\n"}
          <Text style={{ fontSize: 14 }}>
            Headaches, tension headaches, stress headaches, migraines, lack of
            energy, interrupted sleep patterns, obesity issues, anxiety,
            hypertension, tiredness, snoring, soreness in the ears, clenching of
            the jaw, TMJ problems, trigger point pain, insomnia, and fatigue.
          </Text>
          {"\n"}
          {"\n"}
          <Text
            style={{
              color: "blue",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15"
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.adcofnorton.com/Norton-Sleep-Apnea-Quiz.asp"
              )
            }
          >
            Click to take our Sleep Apnea Quiz
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 20
  },
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    color: "red",
    paddingTop: 20
  }
});

export default SleepApnea;
