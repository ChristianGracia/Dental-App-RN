import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
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
        <View>
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
                style={styles.imgSizer}
                resizeMode="contain"
                source={{
                  uri:
                    "https://i1.wp.com/kentuckyperio.com/wp-content/uploads/2015/08/iStock-543979766-2.jpg?fit=2000%2C1500&ssl=1"
                }}
              />
              <View style={{ padding: 10 }}></View>
              <Text style={styles.itemHeader}>What are dental implants?</Text>

              <Text style={styles.itemPickText}>
                Dental implants are metal posts or frames that are surgically
                positioned into the jawbone beneath your gums. Once in place,
                they allow your dentist to mount replacement teeth onto them.
                {"\n\n"}At Advanced Dental Care of Norton, we have successfully
                placed thousands of implants with Dr. Gracia placing implants
                for over 25 years.
              </Text>
              <Text style={styles.itemHeader}>Types of dental implants</Text>
              <Text style={styles.itemPickText}>
                At Advanced Dental Care of Norton, we place titanium, zirconia,
                and zygomatic implants. Titanium and zirconia implants are
                endosteal implants and they are the most commonly used type of
                implant. Zirconia is used when a patient has a metal allergy and
                we are unable to use titanium. Zygomatic implants are different
                from conventional dental implants in that they anchor in to the
                zygomatic bone rather than the maxilla. They may be used when
                maxillary bone quality or quantity is inadequate for the
                placement of regular dental implants
              </Text>
              <Text style={styles.itemHeader}>
                How do dental implants Work?
              </Text>
              <Text style={styles.itemPickText}>
                Because implants fuse to your jawbone, they provide stable
                support for artificial teeth. Dentures and bridges mounted to
                implants won't slip or shift in your mouth — an especially
                important benefit when eating and speaking. This secure fit
                helps the dentures and bridges — as well as individual crowns
                placed over implants — feel more natural than conventional
                bridges or dentures.
              </Text>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{
                    width: wp("80%"),
                    height: hp("50%")
                  }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "https://www.aaid-implant.org/assets/1/7/Implant_Basics_Diagram.png"
                  }}
                />
              </View>
              <Text style={styles.itemHeader}>
                3-D Imaging and Treatment Planning
              </Text>
              <Text style={styles.itemPickText}>
                State-of-the-art, highly precise 3D digital imaging and implant
                surgical planning software have made implant procedures faster
                and highly predictable. At Advanced Dental Care of Norton we use
                these tools to analyze the anatomy of your jaw and determine the
                best sites for implant placement before surgery. This saves time
                and money, and shortens recovery time.
              </Text>
              <Text style={styles.itemHeader}>
                Dental implants might be right for you if...
              </Text>
              <Text style={styles.itemPickText}>
                <Text style={{ color: iOSColors.blue }}>
                  Have one or more missing teeth {"\n\n"}Have a jawbone that's
                  reached full growth {"\n\n"}Have adequate bone to secure the
                  implants or are able to have a bone graft {"\n\n"}
                  Have healthy oral tissues {"\n\n"}Don't have health conditions
                  that will affect bone healing {"\n\n"}Are unable or unwilling
                  to wear dentures{"\n\n"}Want to improve your speech {"\n\n"}
                  Are willing to commit several months to the process {"\n\n"}
                  Don't smoke tobacco
                </Text>
                {"\n\n"}
                For some people, ordinary bridges and dentures are simply not
                comfortable or even possible, due to sore spots, poor ridges or
                gagging. In addition, ordinary bridges must be attached to teeth
                on either side of the space left by the missing tooth. An
                advantage of implants is that no adjacent teeth need to be
                prepared or ground down to hold your new replacement tooth/teeth
                in place.
                {"\n\n"}
              </Text>
              <Text style={styles.itemHeader}>How to prepare</Text>
              <Text style={styles.itemPickText}>
                The planning process for dental implants may involve a variety
                of specialists which fortunately at Advanced Dental Care of
                Norton we have all these specialists in-house. {"\n"}
                {"\n"}These specialist include a doctor who specializes in
                conditions of the mouth, jaw and face (oral and maxillofacial
                surgeon), a dentist specializing in treating structures that
                support the teeth, such as gums and bones (periodontist), a
                dentist who designs and fits artificial teeth (prosthodontist).{" "}
                {"\n"}
                {"\n"} Because dental implants require one or more surgical
                procedures, you must have a thorough evaluation to prepare for
                the process, including:{"\n"}
              </Text>
              <Text style={styles.itemSubHeader}>
                Comprehensive dental exam
              </Text>
              <Text style={styles.itemPickText}>
                You may have dental X-rays and 3D images taken, and have models
                made of your teeth and jaw.
              </Text>
              <Text style={styles.itemSubHeader}>
                Review of your medical history
              </Text>
              <Text style={styles.itemPickText}>
                Tell your doctor about any medical conditions and any
                medications you take, including prescription and
                over-the-counter drugs and supplements. If you have certain
                heart conditions or orthopedic implants, your doctor may
                prescribe antibiotics before surgery to help prevent infection.
              </Text>
              <Text style={styles.itemSubHeader}>Treatment plan</Text>
              <Text style={styles.itemPickText}>
                Tailored to your situation, this plan takes into account factors
                such as how many teeth you need replaced and the condition of
                your jawbone and remaining teeth. To control pain, anesthesia
                options during surgery include local anesthesia, sedation or
                general anesthesia.
                {"\n"}
                {"\n"}Your dental care team will instruct you about eating and
                drinking before surgery, depending on what type of anesthesia
                you have. If you're having sedation or general anesthesia, plan
                to have someone take you home after surgery and expect to rest
                for the remainder of the day.
              </Text>
              <Text style={styles.itemHeader}>What to Expect</Text>
              <Text style={styles.itemPickText}>
                Dental implant surgery is usually an outpatient surgery
                performed in stages, with healing time between procedures. The
                process of placing a dental implant involves multiple steps,
                including:
                {"\n\n"}- Damaged tooth removal {"\n"}- Jawbone preparation
                (grafting), when needed{"\n"}- Dental implant placement {"\n"}-
                Bone growth and healing {"\n"}- Abutment placement {"\n"}-
                Artificial tooth placement {"\n"}
                {"\n"}
                The entire process can take many months from start to finish.
                Much of that time is devoted to healing and waiting for the
                growth of new bone in your jaw. Depending on your situation, the
                specific procedure done or the materials used, certain steps can
                sometimes be combined.
              </Text>
              <Text style={styles.itemHeader}>
                Tips to make your implants last
              </Text>
              <Text style={styles.itemSubHeader}>
                {"\n"}Practice excellent oral hygiene
              </Text>
              <Text style={styles.itemPickText}>
                Just as with your natural teeth, keep implants, artificial teeth
                and gum tissue clean. Specially designed brushes, such as an
                interdental brush that slides between teeth, can help clean the
                nooks and crannies around teeth, gums and metal posts.{" "}
              </Text>
              <Text style={styles.itemSubHeader}>
                See your dentist regularly
              </Text>
              <Text style={styles.itemPickText}>
                Schedule dental checkups to ensure the health and proper
                functioning of your implants and follow the advice for
                professional cleanings.
              </Text>
              <Text style={styles.itemSubHeader}>Avoid damaging habits</Text>
              <Text style={styles.itemPickText}>
                Don't chew hard items, such as ice and hard candy, which can
                break your crowns — or your natural teeth. Avoid tooth-staining
                tobacco and caffeine products. Get treatment if you grind your
                teeth.
              </Text>
              <Text style={styles.itemHeader}>Facts about Dental Implants</Text>
              <Text style={styles.itemPickText}>
                - Ancient dental implants have been traced back to around 600
                AD, when tooth-like pieces of shell were hammered into the jaw
                of a Mayan woman. {"\n\n"}- Dental implants are the only dental
                restoration option that preserves natural bone, actually helping
                to stimulate bone growth. {"\n\n"}- In 1951, a small group of
                dentists who were successfully placing dental implants formed
                the AAID – American Academy of Implant Dentistry – to share
                their knowledge on the practice of implantology. AAID is the
                first professional organization in the world dedicated to
                advancing implant dentistry. {"\n\n"}- In 1952, Swedish
                orthopedic surgeon P.I. Branemark discovered that titanium
                naturally fuses with bone, eventually switching his research
                focus to the mouth from the knee and hip. {"\n\n"}- 3 million
                people in the United States have implants, a number that is
                growing by 500,000 annually.
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
    color: "#114260",
    fontSize: 20,
    alignItems: "center",
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
  },
  itemSubHeader: {
    fontWeight: "bold",
    textAlign: "center",
    color: iOSColors.blue,
    fontSize: 20
  }
});

export default Implants;
