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
import Bleaching from "../components/services/Bleaching";
import Botox from "../components/services/Botox";
import Composites from "../components/services/Composites";
import Crowns from "../components/services/Crowns";
import Dentures from "../components/services/Dentures";
import DermalFillers from "../components/services/DermalFillers";
import Dysport from "../components/services/Dysport";
import Implants from "../components/services/Implants";
import Orthodontics from "../components/services/Orthodontics";
import Partials from "../components/services/Partials";
import Pediatrics from "../components/services/Pediatrics";
import RootCanals from "../components/services/RootCanals";
import Sedation from "../components/services/Sedation";
import SleepApnea from "../components/services/SleepApnea";
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

            {/* Show Service Component */}
            {this.state.showAestheticSpa ? <AestheticSpa /> : null}
            {this.state.showBleaching ? <Bleaching /> : null}
            {this.state.showBotox ? <Botox /> : null}
            {this.state.showComposites ? <Composites /> : null}
            {this.state.showCrowns ? <Crowns /> : null}
            {this.state.showDentures ? <Dentures /> : null}
            {this.state.showDermalFillers ? <DermalFillers /> : null}
            {this.state.showDysport ? <Dysport /> : null}
            {this.state.showImplants ? <Implants /> : null}
            {this.state.showOrthodontics ? <Orthodontics /> : null}
            {this.state.showPartials ? <Partials /> : null}
            {this.state.showPediatric ? <Pediatrics /> : null}
            {this.state.showRootCanals ? <RootCanals /> : null}
            {this.state.showSedation ? <Sedation /> : null}
            {this.state.showSleepApnea ? <SleepApnea /> : null}
            {this.state.showVeneers ? <Veneers /> : null}

            {/* Images */}
            <View style={styles.serviceImage} />
            {/* Service Text */}
            <View style={styles.itemPickInfo} />

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
    alignContent: "left"
  },
  buttonDiv: {
    paddingLeft: wp("1%"),
    paddingTop: hp("1%")
  }
});

export default Services;
