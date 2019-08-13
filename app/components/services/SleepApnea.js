import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { iOSColors } from "react-native-typography";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class SleepApnea extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Sleep Apnea</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={{ width: "100%", height: hp("45%"), marginTop: 15 }}
            resizeMode="contain"
            source={{
              uri:
                "https://cdn.foreversites.com/assets/img/infographics/Sleep-Apnea-Infographic-cropped.png"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            {"\n"}
            Sleep apnea is an extremely serious condition that causes a person
            to wake up constantly throughout the night from respiratory
            disturbances like sleep apnea (when you stop breathing).
            {"\n"}
            {"\n"}
            Sleep apnea will cause medical conditions to occur, and existing
            medical conditions to worsen or make more difficult for you and your
            doctor to manage.
            {"\n"}
            {"\n"}
            <Text
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold"
              }}
            >
              Types of Sleep Apnea {"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              {"\n"}Obstructive sleep apnea:{"\n"}
            </Text>
            More common form that occurs when throat muscles relax
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>
              Central sleep apnea:{"\n"}
            </Text>
            When your brain doesn't send proper signals to the muscles that
            control breathing
            {"\n"}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>
              Complex sleep apnea syndrome:{"\n"}
            </Text>
            Known as treatment-emergent central sleep apnea, which occurs when
            someone has both obstructive sleep apnea and central sleep apnea
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
              hypertension, tiredness, snoring, soreness in the ears, clenching
              of the jaw, TMJ problems, trigger point pain, insomnia, and
              fatigue.
            </Text>
            {"\n"}
            {"\n"}
            Hypertension (high blood pressure, eventually renal failure),
            diabetes, heart failure, and stroke are very common in people who
            suffer from sleep apnea.
            {"\n"}
            {"\n"}
            <Text
              style={{
                color: "blue",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30",
                paddingTop: 30
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
  }
});

export default SleepApnea;
