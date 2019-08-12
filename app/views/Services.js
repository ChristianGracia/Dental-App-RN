import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  Image,
  Linking
} from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import AestheticSpa from "../components/services/AestheticSpa";
import Composites from "../components/services/Composites";
import Crowns from "../components/services/Crowns";
import Implants from "../components/services/Implants";
import Orthodontics from "../components/services/Orthodontics";
import Veneers from "../components/services/Veneers";

class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showList: true,
      showItem: "",
      showClick: true,
      showTitle: true,

      showAestheticSpa: false,
      showBleaching: false,
      showBotox: false,
      showComposites: false,
      showCrowns: false,
      showDentures: false,
      showDysport: false,
      showDermalFillers: false,
      showImplants: false,
      showOrthodontics: false,
      showPartials: false,
      showPediatric: false,
      showRootCanals: false,
      showSedation: false,
      showSleepApnea: false,
      showVeneers: false
    };
  }
  handleClick = item => {
    //hide title
    this.setState({ showTitle: false });
    //hide click on service
    this.setState({ showClick: false });
    //hide list
    this.setState({ showList: false });
    //change current item
    this.setState({ showItem: item.key });
    //reset scrollview
    this.refs._scrollView.scrollTo({ y: 0, animated: true });

    //item condition
    if (item.key == "Aesthetic Spa") {
      this.setState({ showAestheticSpa: true });
    }
    if (item.key == "Bleaching") {
      this.setState({ showBleaching: true });
    }

    if (item.key == "Botox") {
      this.setState({ showBotox: true });
    }

    if (item.key == "Composites") {
      this.setState({ showComposites: true });
    }

    if (item.key == "Crowns") {
      this.setState({ showCrowns: true });
    }

    if (item.key == "Dentures") {
      this.setState({ showDentures: true });
    }
    if (item.key == "Dermal Fillers") {
      this.setState({ showDermalFillers: true });
    }
    if (item.key == "Dysport") {
      this.setState({ showDysport: true });
    }
    if (item.key == "Implants") {
      this.setState({ showImplants: true });
    }
    if (item.key == "Orthodontics") {
      this.setState({ showOrthodontics: true });
    }
    if (item.key == "Pediatric Dentistry") {
      this.setState({ showPediatric: true });
    }
    if (item.key == "Partial Dentures") {
      this.setState({ showPartials: true });
    }
    if (item.key == "Root Canals") {
      this.setState({ showRootCanals: true });
    }
    if (item.key == "Sedation") {
      this.setState({ showSedation: true });
    }
    if (item.key == "Sleep Apnea") {
      this.setState({ showSleepApnea: true });
    }
    if (item.key == "Veneers") {
      this.setState({ showVeneers: true });
    }
  };

  resetList = () => {
    this.setState({ showList: true });
    this.setState({ showItem: "" });

    //reset
    this.setState({
      showAestheticSpa: false,
      showBleaching: false,
      showBotox: false,
      showComposites: false,
      showCrowns: false,
      showDentures: false,
      showDermalFillers: false,
      showDysport: false,
      showImplants: false,
      showOrthodontics: false,
      showPartials: false,
      showPediatric: false,
      showRootCanals: false,
      showSedation: false,
      showSleepApnea: false,
      showVeneers: false,

      showClick: true,
      showTitle: true
    });
  };

  render() {
    const { showCrowns } = this.state;
    let information;

    if (showCrowns) {
      information = <Crowns />;
    }
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollStyle} ref="_scrollView">
          <View style={styles.container}>
            {this.state.showTitle ? (
              <View style={styles.headerDiv}>
                <Text style={styles.header}>Services</Text>
              </View>
            ) : null}
            {this.state.showClick ? (
              <Text style={styles.serviceHelp}>
                Click on a service we offer for options and information
              </Text>
            ) : null}

            {/* Service List */}

            {this.state.showList ? (
              <FlatList
                style={styles.flatList}
                data={[
                  { key: "Aesthetic Spa" },
                  { key: "Bleaching" },
                  { key: "Botox" },
                  { key: "Composites" },
                  { key: "Crowns" },
                  { key: "Dentures" },
                  { key: "Dermal Fillers" },
                  { key: "Dysport" },
                  { key: "Implants" },
                  { key: "Orthodontics" },
                  { key: "Partial Dentures" },
                  { key: "Pediatric Dentistry" },
                  { key: "Root Canals" },
                  { key: "Sedation" },
                  { key: "Sleep Apnea" },
                  { key: "Veneers" }
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItemButton}
                    onPress={() => this.handleClick(item)}
                  >
                    <Text style={styles.listItemText}>{item.key}</Text>
                  </TouchableOpacity>
                )}
              />
            ) : null}

            {/* Service Title */}

            <View style={styles.flexRow}>
              {this.state.showAestheticSpa ? (
                <Text style={styles.itemPick}>Aesthetic Spa</Text>
              ) : null}
              {this.state.showBleaching ? (
                <Text style={styles.itemPick}>Bleaching</Text>
              ) : null}
              {this.state.showBotox ? (
                <Text style={styles.itemPick}>Botox</Text>
              ) : null}
              {this.state.showComposites ? (
                <Text style={styles.itemPick}>Composites</Text>
              ) : null}
              {this.state.showCrowns ? (
                <Text style={styles.itemPick}>Crowns</Text>
              ) : null}
              {this.state.showDentures ? (
                <Text style={styles.itemPick}>Dentures</Text>
              ) : null}
              {this.state.showDermalFillers ? (
                <Text style={styles.itemPick}>Dermal Fillers</Text>
              ) : null}
              {this.state.showDysport ? (
                <Text style={styles.itemPick}>Dysport</Text>
              ) : null}
              {this.state.showImplants ? (
                <Text style={styles.itemPick}>Implants</Text>
              ) : null}
              {this.state.showOrthodontics ? (
                <Text style={styles.itemPick}>Orthodontics</Text>
              ) : null}
              {this.state.showPartials ? (
                <Text style={styles.itemPick}>Partial Dentures</Text>
              ) : null}
              {this.state.showPediatric ? (
                <Text style={{ ...styles.itemPick }}>Pediatric Dentistry</Text>
              ) : null}
              {this.state.showRootCanals ? (
                <Text style={styles.itemPick}>Root Canals</Text>
              ) : null}
              {this.state.showSedation ? (
                <Text style={styles.itemPick}>Sedation</Text>
              ) : null}
              {this.state.showSleepApnea ? (
                <Text style={styles.itemPick}>Sleep Apnea</Text>
              ) : null}
              {this.state.showVeneers ? (
                <Text style={styles.itemPick}>Veneers</Text>
              ) : null}

              {/* Back Button */}

              <View style={styles.buttonDiv}>
                {this.state.showItem ? (
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={this.resetList}
                  >
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>

            {/* Show Service image + info*/}
            {this.state.showAestheticSpa ? <AestheticSpa /> : null}
            {this.state.showComposites ? <Composites /> : null}
            {this.state.showCrowns ? <Crowns /> : null}
            {this.state.showImplants ? <Implants /> : null}
            {this.state.showVeneers ? <Veneers /> : null}
            {this.state.showOrthodontics ? <Orthodontics /> : null}

            {/* Images */}

            <View style={styles.serviceImage}>
              {this.state.showRootCanals ? (
                <Image
                  style={{
                    width: "100%",
                    height: hp("45%")
                  }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "http://icondentalsf.com/wp-content/uploads/2019/01/rct-before-after.jpg"
                  }}
                />
              ) : null}
            </View>

            {/* Service Text */}

            <View style={styles.itemPickInfo}>
              {this.state.showBleaching ? (
                <Text style={styles.itemPickText}>
                  Bleaching text goes here
                </Text>
              ) : null}
              {this.state.showBotox ? (
                <Text style={styles.itemPickText}>Botox text goes here</Text>
              ) : null}

              {this.state.showDentures ? (
                <Text style={styles.itemPickText}>Dentures text goes here</Text>
              ) : null}
              {this.state.showDermalFillers ? (
                <Text style={styles.itemPickText}>
                  Dermal Fillers text goes here
                </Text>
              ) : null}
              {this.state.showDysport ? (
                <Text style={styles.itemPickText}>Dysport text goes here</Text>
              ) : null}

              {this.state.showPartials ? (
                <Text style={styles.itemPickText}>
                  Partial Dentures text goes here
                </Text>
              ) : null}
              {this.state.showPediatric ? (
                <Text style={styles.itemPickText}>
                  Pediatric Dentistry text goes here
                </Text>
              ) : null}
              {this.state.showRootCanals ? (
                <Text style={styles.itemPickText}>
                  When the pulp of a tooth is infected (either through decay or
                  injury), a root canal by an Endodontist is needed to save the
                  tooth.
                  {"\n"}
                  {"\n"}
                  At early stages of infection you may not feel any pain but it
                  is a sure sign that a root canal is needed when the tooth
                  starts to darken in color.
                  {"\n"}
                  {"\n"}
                  If a root canal is not performed, the infection can spread
                  through the root canal system of the tooth which can lead to
                  an abscess in which pus collects, swelling occurs, and the
                  tooth can be lost.
                  {"\n"}
                  {"\n"}
                  Contrary to what you may hear, root canals are not painful
                  with local anaesthetic and there should be no more pain than
                  one would feel with a normal filling be done.
                  {"\n"}
                  {"\n"}
                  First the root is cleaned to remove all infection from the
                  root canal and drain any abscesses.
                  {"\n"}
                  {"\n"}
                  Then a temporary filling is placed and after seeing the
                  Endodontist again and the infection is cleared, a permanent
                  filling is placed and the tooth is saved.
                  {"\n"}
                  {"\n"}
                  Root canals are important because once the pulp is destroyed,
                  the tooth will never be able to heal.
                </Text>
              ) : null}
              {this.state.showSedation ? (
                <Text style={styles.itemPickText}>Sedation text goes here</Text>
              ) : null}
              {this.state.showSleepApnea ? (
                <Text style={styles.itemPickText}>
                  Sleep apnea is an extremely serious condition that causes a
                  person to wake up constantly throughout the night from
                  respiratory disturbances like sleep apnea (when you stop
                  breathing).
                  {"\n"}
                  {"\n"}
                  Sleep apnea will cause medical conditions to occur, and
                  existing medical conditions to worsen or make more difficult
                  for you and your doctor to manage.
                  {"\n"}
                  {"\n"}
                  Hypertension (high blood pressure, eventually renal failure),
                  diabetes, heart failure, and stroke are very common in people
                  who suffer from sleep apnea.
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red", fontWeight: "bold" }}>
                    Symptoms of Sleep Apnea:
                  </Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ fontSize: 14 }}>
                    Headaches, tension headaches, stress headaches, migraines,
                    lack of energy, interrupted sleep patterns, obesity issues,
                    anxiety, hypertension, tiredness, snoring, soreness in the
                    ears, clenching of the jaw, TMJ problems, trigger point
                    pain, insomnia, and fatigue.
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
              ) : null}
            </View>

            {/* Back Button */}

            <View style={styles.buttonDiv2}>
              {this.state.showItem ? (
                <TouchableOpacity
                  style={styles.backButton2}
                  onPress={this.resetList}
                >
                  <Text style={styles.buttonText2}>Back</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            {/* add some white space */}
            <View style={{ height: 30, color: "#fff" }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  serviceHelp: {
    paddingTop: 30,
    paddingBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  listItemButton: {},
  listItemText: {
    textAlign: "center",
    fontSize: 23,
    paddingTop: 20,
    fontWeight: "bold",
    color: "#114260"
  },
  flatList: {},
  scrollStyle: {},
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    color: "red",
    paddingTop: 20
  },
  backButton: {},
  buttonDiv2: {
    alignItems: "center",
    paddingTop: hp("10%")
  },
  buttonText: {
    color: "#fcec01",
    backgroundColor: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#fff",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 10
  },
  buttonText2: {
    color: "#114260",
    backgroundColor: "#fcec01",
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#fff",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 10
  },
  itemPickInfo: {
    paddingTop: 20,
    alignItems: "left",
    width: wp("95%")
  },
  itemPickText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 20
  },
  serviceImage: {
    alignItems: "center",
    paddingTop: 20
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonDiv: {
    paddingLeft: wp("8%"),
    paddingTop: hp("1%")
  }
});

export default Services;
