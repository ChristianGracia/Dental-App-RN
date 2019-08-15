import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { iOSColors } from "react-native-typography";
import ImplantsMore from "./ImplantsMore";

class Implants extends Component {
  constructor() {
    super();
    this.state = {
      showProcedures: false
    };
  }
  showButton = e => {
    if (this.state.showProcedures == false) {
      this.setState({ showProcedures: true });
    } else {
      this.setState({ showProcedures: false });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.itemPick}>Implants</Text>
        <View style={{ padding: 15 }}>
          <View style={styles.buttonDiv}>
            <TouchableOpacity
              styles={styles.showButton}
              onPress={() => this.showButton()}
            >
              {this.state.showProcedures ? (
                <Text style={styles.buttonText}>Hide Implant Procedures</Text>
              ) : null}
              {!this.state.showProcedures ? (
                <Text style={styles.buttonText}>Show Implant Procedures</Text>
              ) : null}
            </TouchableOpacity>
          </View>
          {!this.state.showProcedures ? (
            <View>
              <Image
                style={{
                  width: "100%",
                  height: hp("45%"),
                  marginTop: 15,
                  paddingLeft: wp("5%")
                }}
                resizeMode="contain"
                source={{
                  uri:
                    "https://i1.wp.com/kentuckyperio.com/wp-content/uploads/2015/08/iStock-543979766-2.jpg?fit=2000%2C1500&ssl=1"
                }}
              />
              <Text style={styles.itemPickText}>
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  What are dental implants?
                </Text>
                {"\n\n"}
                Dental implants are metal posts or frames that are surgically
                positioned into the jawbone beneath your gums. Once in place,
                they allow your dentist to mount replacement teeth onto them.
                {"\n\n"}At Advanced Dental Care of Norton, we have successfully
                placed thousands of implants with Dr. Gracia placing implants
                for over 25 years.
                {"\n\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Types of dental implants we place
                </Text>
                {"\n\n"}
                At Advanced Dental Care of Norton, we uses titanium or zirconia
                implants. Zirconia is used when a patient has a metal allergy
                and we are unable to use titanium. These implants are endosteal
                implants and they are the most commonly used type of implant.
                {"\n\n"}
                <Text style={{ fontWeight: "bold" }}>
                  How do dental implants Work?
                </Text>{" "}
                {"\n\n"}
                Because implants fuse to your jawbone, they provide stable
                support for artificial teeth. Dentures and bridges mounted to
                implants won't slip or shift in your mouth — an especially
                important benefit when eating and speaking. This secure fit
                helps the dentures and bridges — as well as individual crowns
                placed over implants — feel more natural than conventional
                bridges or dentures.
                <Image
                  style={{
                    width: wp("80%"),
                    height: hp("50%"),
                    marginLeft: wp("25%"),
                    marginRight: wp("25%")
                  }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "https://www.aaid-implant.org/assets/1/7/Implant_Basics_Diagram.png"
                  }}
                />
                <Text style={{ fontWeight: "bold" }}>
                  3-D Imaging and Treatment Planning{"\n\n"}
                </Text>
                <Text>
                  State-of-the-art, highly precise 3D digital imaging and
                  implant surgical planning software have made implant
                  procedures faster and highly predictable. At Advanced Dental
                  Care of Norton we use these tools to analyze the anatomy of
                  your jaw and determine the best sites for implant placement
                  before surgery. This saves time and money, and shortens
                  recovery time.{"\n\n"}
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Dental implants might be right for you if...{"\n"}
                  {"\n"}
                </Text>
                <Text>
                  1{") "}Have one or more missing teeth {"\n"}2{") "}Have a
                  jawbone that's reached full growth {"\n"}3{") "}Have adequate
                  bone to secure the implants or are able to have a bone graft{" "}
                  {"\n"}4{") "}
                  Have healthy oral tissues {"\n"}5{") "}Don't have health
                  conditions that will affect bone healing {"\n"}6{") "}Are
                  unable or unwilling to wear dentures{"\n"}7{") "}Want to
                  improve your speech {"\n"}8{") "}Are willing to commit several
                  months to the process {"\n"}9{") "}Don't smoke tobacco{"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n\n"}For some people, ordinary bridges and dentures are
                  simply not comfortable or even possible, due to sore spots,
                  poor ridges or gagging. In addition, ordinary bridges must be
                  attached to teeth on either side of the space left by the
                  missing tooth. An advantage of implants is that no adjacent
                  teeth need to be prepared or ground down to hold your new
                  replacement tooth/teeth in place.
                  {"\n\n"}
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  How to prepare{"\n"}
                  {"\n"}
                </Text>
                <Text>
                  The planning process for dental implants may involve a variety
                  of specialists which fortunately at Advanced Dental Care of
                  Norton we have all these specialists in-house. {"\n"}
                  {"\n"}These specialist include a doctor who specializes in
                  conditions of the mouth, jaw and face (oral and maxillofacial
                  surgeon), a dentist specializing in treating structures that
                  support the teeth, such as gums and bones (periodontist), a
                  dentist who designs and fits artificial teeth
                  (prosthodontist). {"\n"}
                  {"\n"} Because dental implants require one or more surgical
                  procedures, you must have a thorough evaluation to prepare for
                  the process, including:{"\n"}
                  {"\n"}
                  <Text
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: iOSColors.blue
                    }}
                  >
                    Comprehensive dental exam
                  </Text>
                  {"\n\n"} You may have dental X-rays and 3D images taken, and
                  have models made of your teeth and jaw. {"\n\n"}
                  <Text
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: iOSColors.blue
                    }}
                  >
                    Review of your medical history
                  </Text>
                  {"\n\n"}Tell your doctor about any medical conditions and any
                  medications you take, including prescription and
                  over-the-counter drugs and supplements. If you have certain
                  heart conditions or orthopedic implants, your doctor may
                  prescribe antibiotics before surgery to help prevent
                  infection.
                  {"\n\n"}
                  <Text
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: iOSColors.blue
                    }}
                  >
                    Treatment plan{"\n\n"}
                  </Text>
                  Tailored to your situation, this plan takes into account
                  factors such as how many teeth you need replaced and the
                  condition of your jawbone and remaining teeth. To control
                  pain, anesthesia options during surgery include local
                  anesthesia, sedation or general anesthesia.
                  {"\n"}
                  {"\n"}Your dental care team will instruct you about eating and
                  drinking before surgery, depending on what type of anesthesia
                  you have. If you're having sedation or general anesthesia,
                  plan to have someone take you home after surgery and expect to
                  rest for the remainder of the day.{"\n"}
                  {"\n"}
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  What to Expect{"\n"}
                  {"\n"}
                </Text>
                <Text>
                  Dental implant surgery is usually an outpatient surgery
                  performed in stages, with healing time between procedures. The
                  process of placing a dental implant involves multiple steps,
                  including:
                  {"\n\n"}- Damaged tooth removal {"\n"}- Jawbone preparation
                  (grafting), when needed{"\n"}- Dental implant placement {"\n"}
                  - Bone growth and healing {"\n"}- Abutment placement {"\n"}-
                  Artificial tooth placement {"\n"}
                  {"\n"}
                  The entire process can take many months from start to finish.
                  Much of that time is devoted to healing and waiting for the
                  growth of new bone in your jaw. Depending on your situation,
                  the specific procedure done or the materials used, certain
                  steps can sometimes be combined.
                  {"\n"}
                  {"\n"}
                </Text>
                <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                  Tips to make your implants last{"\n"}
                  {"\n"}
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  {"\n"}
                  Practice excellent oral hygiene
                </Text>
                {"\n"}Just as with your natural teeth, keep implants, artificial
                teeth and gum tissue clean. Specially designed brushes, such as
                an interdental brush that slides between teeth, can help clean
                the nooks and crannies around teeth, gums and metal posts.{" "}
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  {"\n"}
                  See your dentist regularly
                </Text>{" "}
                {"\n"}
                Schedule dental checkups to ensure the health and proper
                functioning of your implants and follow the advice for
                professional cleanings. {"\n"}
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Avoid damaging habits
                </Text>{" "}
                {"\n"}
                Don't chew hard items, such as ice and hard candy, which can
                break your crowns — or your natural teeth. Avoid tooth-staining
                tobacco and caffeine products. Get treatment if you grind your
                teeth. {"\n"}
              </Text>
            </View>
          ) : null}

          <View>{this.state.showProcedures ? <ImplantsMore /> : null}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemPickText: {
    color: "#000",
    fontSize: 20,
    alignItems: "center"
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
  buttonDiv: {
    alignItems: "center"
  },
  buttonText: {
    color: iOSColors.white,
    backgroundColor: iOSColors.black,
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#fff",
    width: "auto",
    height: 50,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20
  }
});

export default Implants;
