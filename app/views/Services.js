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
      this.refs._scrollView.scrollTo({ y: 0, animated: true });
    }
    if (item.key == "Sedation") {
      this.setState({ showSedation: true });
    }
    if (item.key == "Sleep Apnea") {
      this.setState({ showSleepApnea: true });
      this.refs._scrollView.scrollTo({ y: 0, animated: true });
    }
    if (item.key == "Veneers") {
      this.setState({ showVeneers: true });
      this.refs._scrollView.scrollTo({ y: 0, animated: true });
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
                Click on a service we offer for more information
              </Text>
            ) : null}
            <View>
              <Text />
            </View>

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

            {/* Images */}

            <View style={styles.serviceImage}>
              {this.state.showAestheticSpa ? (
                <Image
                  style={{ width: "100%", height: hp("45%") }}
                  source={{
                    uri:
                      "https://www.adcofnorton.com/images/Norton-MA-Botox-Dysport.jpg"
                  }}
                />
              ) : null}
              {this.state.showCrowns ? (
                <Image
                  style={{ width: 360, height: 200 }}
                  source={{
                    uri:
                      "https://www.news-medical.net/image.axd?picture=2017%2F8%2Fshutterstock_611274782.jpg"
                  }}
                />
              ) : null}
              {this.state.showImplants ? (
                <Image
                  style={{ width: 360, height: 200, marginRight: "-5%" }}
                  source={{
                    uri:
                      "https://www.aspendental.com/-/media/aspendentaldotcom/ada-content/dental-implants/new-implants/implant_1.jpg?h=252&w=400&la=en&hash=D1211062CEC935D9CC3DEA947CE1CF47"
                  }}
                />
              ) : null}
              {this.state.showRootCanals ? (
                <Image
                  style={{ width: 360, height: 200 }}
                  source={{
                    uri:
                      "http://icondentalsf.com/wp-content/uploads/2019/01/rct-before-after.jpg"
                  }}
                />
              ) : null}
              {this.state.showVeneers ? (
                <Image
                  style={{ width: wp("90%"), height: hp("60%") }}
                  source={{
                    uri:
                      "https://www.dentalhealth.org/GetImage.aspx?IDMF=f95a3006-fe99-4190-9d4c-67d97e9c347f&w=400&h=549&src=mc"
                  }}
                />
              ) : null}
            </View>

            {/* Service Text */}

            <View style={styles.itemPickInfo}>
              {this.state.showAestheticSpa ? (
                <Text style={styles.itemPickText}>
                  Here at ADC of Norton we have an in-house Aesthetic Spa. With
                  our team of skilled nurses, we offer Botox, Dysport, and
                  Dermal Fillers.
                  {"\n"}
                  {"\n"}
                  Botox and Dysport are both safe and effective treatments for
                  moderate to severe wrinkles.
                  {"\n"}
                  {"\n"}
                  These treatments reduce the appearance of wrinkles by relaxing
                  the underlying muscles beneath the skin which results in
                  smoother skin.
                  {"\n"}
                  {"\n"}
                  Both treatments have the same active ingredient but have their
                  differences.
                  {"\n"}
                  {"\n"}
                  More information about Botox, Dysport, and Dermal Fillers can
                  be found on our list of services.
                </Text>
              ) : null}
              {this.state.showBleaching ? (
                <Text style={styles.itemPickText}>
                  Bleaching text goes here
                </Text>
              ) : null}
              {this.state.showBotox ? (
                <Text style={styles.itemPickText}>Botox text goes here</Text>
              ) : null}
              {this.state.showComposites ? (
                <Text style={styles.itemPickText}>
                  Composites text goes here
                </Text>
              ) : null}
              {this.state.showCrowns ? (
                <Text style={styles.itemPickText}>
                  <Text>
                    A crown is a cover or “cap” for your tooth that restores the
                    tooth’s normal shape, size, function, and appearance.
                    {"\n"}
                    {"\n"}
                    Once a crown is cemented, it covers the entire visible
                    portion of a tooth above the gum line.
                    {"\n"}
                    {"\n"}
                    There are many reasons why a dentist may recommend a crown:
                    {"\n"}
                    {"\n"}
                  </Text>
                  <Text style={{ color: "red" }}>1{")"}</Text>{" "}
                  <Text>
                    To protect a weak tooth from breaking due to decay or
                    fractures
                  </Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red" }}>2{")"}</Text>{" "}
                  <Text>Restore an already broken tooth</Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red" }}>3{")"}</Text>{" "}
                  <Text>To cover and support a tooth with a large cavity</Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red" }}>4{")"}</Text>{" "}
                  <Text>To hold a dental bridge in place</Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red" }}>5{")"}</Text>{" "}
                  <Text>To cover discolored or disfigured tooth</Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red" }}>6{")"}</Text>{" "}
                  <Text>To cover a dental implant</Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red" }}>7{")"}</Text>{" "}
                  <Text>To make a tooth look better</Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                    Types of Crowns
                  </Text>
                  {"\n"}
                  {"\n"}
                  <Text>
                    <Text>
                      Permanent crowns can be made from stainless steel, all
                      metal (such as gold or another alloy),
                      porcelain-fused-to-metal, all resin, or all ceramic.
                    </Text>
                    {"\n"}
                    {"\n"}
                    <Text style={{ color: "blue", fontWeight: "bold" }}>
                      Stainless steel crowns:
                    </Text>
                    {"\n"}
                    <Text>
                      Stainless steel crowns are prefabricated crowns that are
                      used on permanent teeth primarily as a temporary measure.
                      The crown protects the tooth or filling while a permanent
                      crown is made from another material. The crown covers the
                      entire tooth and protects it from further decay. In
                      general, stainless steel crowns are used for children's
                      teeth because they don't require multiple dental visits to
                      put in place and so are more cost- effective than
                      custom-made crowns and prophylactic dental care needed to
                      protect a tooth without a crown.
                      {"\n"}
                      {"\n"}
                    </Text>
                    <Text style={{ color: "blue", fontWeight: "bold" }}>
                      Metals:
                    </Text>
                    {"\n"}
                    <Text>
                      Metals used in crowns include alloys that have a high
                      content of gold or platinum, or base-metal alloys (for
                      example, cobalt- chromium and nickel-chromium alloys).
                      Metal crowns withstand biting and chewing forces well and
                      probably last the longest in terms of wear down. Also,
                      metal crowns rarely chip or break. The metallic color is
                      the main drawback. Metal crowns are a good choice for
                      out-of-sight molars.
                    </Text>
                    {"\n"}
                    {"\n"}
                    <Text style={{ color: "blue", fontWeight: "bold" }}>
                      Porcelain-fused-to-metal:
                    </Text>
                    {"\n"}
                    <Text>
                      Porcelain-fused-to-metal dental crowns can be color
                      matched to your adjacent teeth (unlike the metallic
                      crowns). However, more wearing to the opposing teeth
                      occurs with this crown type compared with metal or resin
                      crowns. The crown's porcelain portion can also chip or
                      break off. Next to all-ceramic crowns,
                      porcelain-fused-to-metal crowns look most like normal
                      teeth. However, sometimes the metal underlying the crown's
                      porcelain can show through as a dark line, especially at
                      the gum line and even more so if your gums recede. These
                      crowns can be a good choice for front or back teeth as
                      well as long bridges where the metal is needed for
                      strength.
                      {"\n"}
                      {"\n"}
                    </Text>
                    <Text style={{ color: "blue", fontWeight: "bold" }}>
                      All-resin:
                    </Text>
                    {"\n"}
                    <Text>
                      All-resin dental crowns are less expensive than other
                      crown types. However, they wear down over time and are
                      more prone to fractures than porcelain-fused-to-metal
                      crowns.
                      {"\n"}
                      {"\n"}
                    </Text>
                    <Text style={{ color: "blue", fontWeight: "bold" }}>
                      All-ceramic or all-porcelain:
                    </Text>
                    {"\n"}
                    <Text>
                      All-ceramic or all-porcelain dental crowns provide better
                      natural color match than any other crown type and may be
                      more suitable for people with metal allergies. All-ceramic
                      crowns can be used for front and back teeth.
                      {"\n"}
                      {"\n"}
                    </Text>
                    <Text style={{ color: "blue", fontWeight: "bold" }}>
                      Temporary/Permanent:
                    </Text>
                    {"\n"}
                    <Text>
                      Temporary crowns can be made in your dentist's office,
                      whereas most permanent crowns are made in a dental
                      laboratory. Typically, temporary crowns are made of an
                      acrylic-based material or stainless steel and can be used
                      as a temporary restoration until a permanent crown is
                      constructed by a lab.
                    </Text>
                  </Text>
                </Text>
              ) : null}
              <Text />
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
              {this.state.showVeneers ? (
                <Text style={styles.itemPickText}>
                  Veneers are a thin layer of porcelain/composite material that
                  is designed to fit over the front surface of a tooth.
                  {"\n"}
                  {"\n"}
                  Veneers can improve the color, shape, position of tooth, and
                  close gaps that would normally require braces.
                  {"\n"}
                  {"\n"}
                  First a small amount of enamel (just enough to fit the Veneer)
                  is removed from the tooth where the Veneer is being placed.
                  This is done so that once the Veneer is placed, the tooth will
                  be its normal size.
                  {"\n"}
                  {"\n"}
                  Then an impression will be taken and a Veneer will be created
                  by our lab and matched to the color of your surrounding teeth.
                  {"\n"}
                  {"\n"}
                  Veneers can last for a very long time and quickly help solve
                  problem areas in your smile.
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
