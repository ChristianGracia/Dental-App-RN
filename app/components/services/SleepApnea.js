import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import { iOSColors } from "react-native-typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class SleepApnea extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Sleep Apnea</Text>
        <View>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/40/sl7_sleep_apnea-8col.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
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
          </Text>
          <Text style={styles.itemHeader}>Types of Sleep Apnea</Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: iOSColors.blue
            }}
          >
            {"\n"}Obstructive sleep apnea{"\n"}
          </Text>
          <Text style={{ padding: 15 }}>
            More common form of sleep apnea that occurs when throat muscles
            relax
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: iOSColors.blue
            }}
          >
            Central sleep apnea{"\n"}
          </Text>
          <Text style={{ padding: 15 }}>
            When your brain doesn't send proper signals to the muscles that
            control breathing
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: iOSColors.blue
            }}
          >
            Complex sleep apnea syndrome
          </Text>
          <Text style={{ padding: 15 }}>
            {"\n"}
            Known as treatment-emergent central sleep apnea, which occurs when
            someone has both obstructive sleep apnea and central sleep apnea
          </Text>
          <Text style={styles.itemHeader}>Symptoms of Sleep Apnea</Text>

          <Text style={{ fontSize: 14, padding: 15 }}>
            {"\n"}
            Headaches, tension headaches, stress headaches, migraines, lack of
            energy, interrupted sleep patterns, obesity issues, anxiety,
            hypertension, tiredness, snoring, soreness in the ears, clenching of
            the jaw, TMJ problems, trigger point pain, insomnia, and fatigue.
          </Text>

          <Text style={styles.itemPickText}>
            Hypertension (high blood pressure, eventually renal failure),
            diabetes, heart failure, and stroke are very common in people who
            suffer from sleep apnea.
          </Text>
          <Text
            style={{
              color: "#114260",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "30",
              marginTop: 30,
              backgroundColor: "#fcec01"
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.adcofnorton.com/Norton-Sleep-Apnea-Quiz.asp"
              )
            }
          >
            Sleep Apnea Quiz{" "}
            <FontAwesomeIcon
              icon="arrow-alt-circle-right"
              color={iOSColors.blue}
              size={30}
            />
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
  },
  itemHeader: {
    color: "#114260",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fcec01"
  }
});

export default SleepApnea;
