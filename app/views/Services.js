import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  Image
} from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showList: true,
      showItem: "",

      showAestheticSpa: false,
      showBleaching: false,
      showBotox: false,
      showComposites: false,
      showCrowns: false,
      showDentures: false,
      showDysport: false,
      showDermalFillers: false,
      showFillers: false,
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
    //hide list
    this.setState({ showList: false });
    //change current item
    this.setState({ showItem: item.key });

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
    if (item.key == "Fillers") {
      this.setState({ showFillers: true });
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
      showFillers: false,
      showImplants: false,
      showOrthodontics: false,
      showPartials: false,
      showPediatric: false,
      showRootCanals: false,
      showSedation: false,
      showSleepApnea: false,
      showVeneers: false
    });
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.headerDiv}>
            <Text style={styles.header}>Services</Text>
          </View>
          <Text style={styles.serviceHelp}>
            Click on a service we offer for more information
          </Text>

          {/* Service List */}

          {this.state.showList ? (
            <FlatList
              style={styles.list}
              data={[
                { key: "Aesthetic Spa" },
                { key: "Bleaching" },
                { key: "Botox" },
                { key: "Composites" },
                { key: "Crowns" },
                { key: "Dentures" },
                { key: "Dermal Fillers" },
                { key: "Dysport" },
                { key: "Fillers" },
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
          {this.state.showFillers ? (
            <Text style={styles.itemPick}>Fillers</Text>
          ) : null}
          {this.state.showImplants ? (
            <Text style={styles.itemPick}>Implants</Text>
          ) : null}
          {this.state.showImplants ? (
            <Text style={styles.itemPick}>Orthodontics</Text>
          ) : null}
          {this.state.showPartials ? (
            <Text style={styles.itemPick}>Partial Dentures</Text>
          ) : null}
          {this.state.showPediatric ? (
            <Text style={styles.itemPick}>Pediatric Dentistry</Text>
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

          {/* Images */}

          <View style={styles.serviceImage}>
            {this.state.showImplants ? (
              <Image
                style={{ width: 360, height: 200, marginRight: -25 }}
                source={{
                  uri:
                    "https://www.aspendental.com/-/media/aspendentaldotcom/ada-content/dental-implants/new-implants/implant_1.jpg?h=252&w=400&la=en&hash=D1211062CEC935D9CC3DEA947CE1CF47"
                }}
              />
            ) : null}
          </View>

          {/* Service Text */}

          <View style={styles.itemPickInfo}>
            {this.state.showAestheticSpa ? (
              <Text style={styles.itemPickText}>
                Here at ADC of Norton we have an in-house Aesthetic Spa. With a
                team of skilled nurses, we offer Botox, Dysport, and Dermal
                Fillers.
                {"\n"}
                {"\n"} Information about these treatments can be found on our
                list of services.
              </Text>
            ) : null}
            {this.state.showBleaching ? (
              <Text style={styles.itemPickText}>Bleaching text goes here</Text>
            ) : null}
            {this.state.showBotox ? (
              <Text style={styles.itemPickText}>Botox text goes here</Text>
            ) : null}
            {this.state.showComposites ? (
              <Text style={styles.itemPickText}>Composites text goes here</Text>
            ) : null}
            {this.state.showCrowns ? (
              <Text style={styles.itemPickText}>Crowns text goes here</Text>
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
            {this.state.showFillers ? (
              <Text style={styles.itemPickText}>Fillers text goes here</Text>
            ) : null}
            {this.state.showImplants ? (
              <Text style={styles.itemPickText}>Implants text goes here</Text>
            ) : null}
            {this.state.showOrthodontics ? (
              <Text style={styles.itemPickText}>
                Orthodontics text goes here
              </Text>
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
                Root Canals text goes here
              </Text>
            ) : null}
            {this.state.showSedation ? (
              <Text style={styles.itemPickText}>Sedation text goes here</Text>
            ) : null}
            {this.state.showSleepApnea ? (
              <Text style={styles.itemPickText}>
                Sleep Apnea text goes here
              </Text>
            ) : null}
            {this.state.showVeneers ? (
              <Text style={styles.itemPickText}>Veneers text goes here</Text>
            ) : null}
          </View>

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
    paddingBottom: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  listItemButton: {},
  listItemText: {
    textAlign: "center",
    fontSize: 23,
    paddingTop: 20,
    fontWeight: "bold",
    color: "#114260"
  },
  list: {},
  scrollStyle: {},
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    color: "#114260"
  },
  backButton: {
    paddingTop: 40,
    alignItems: "center"
  },
  buttonText: {
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
    width: wp("90%")
  },
  itemPickText: {
    color: "#000",
    fontSize: 25,
    paddingLeft: 20
  },
  serviceImage: {
    alignItems: "center",
    paddingTop: 20
  }
});

export default Services;
