import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Linking,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: false,
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      email: "adc-app",
      linkedIn: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }
  handleSubmit = () => {
    if (
      this.state.patientName !== "" &&
      this.state.patientPhone !== "" &&
      this.state.patientEmail !== ""
    ) {
      fetch("https://sendpoint.io/id/ADCEMAIL", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.patientName,
          phone: this.state.patientPhone,
          body: this.state.patientEmail,
          email: this.state.email
        })
      });
      this.setState({
        patientName: "",
        patientEmail: "",
        patientPhone: "",
        showEmail: false
      });
      alert("Message Received!");
    } else {
      alert("Please fill out all fields!");
    }
  };

  handleBack = () => {
    this.setState({
      showEmail: false
    });
  };

  onChangeName = e => {
    console.log(e.nativeEvent);
    this.setState({ patientName: e.nativeEvent.text });
  };
  onChangePhone = e => {
    this.setState({ patientPhone: e.nativeEvent.text });
  };
  onChangeEmail = e => {
    this.setState({ patientEmail: e.nativeEvent.text });
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}
          >
            <KeyboardAvoidingView>
              <View style={styles.headerDiv}>
                <Text style={styles.header}>myADC</Text>
              </View>
              {!this.state.showEmail ? (
                <View style={styles.imgContainer}>
                  <Image
                    source={require("../../assets/main.jpg")}
                    style={styles.logoStyle}
                    resizeMode="contain"
                  />
                </View>
              ) : (
                <View style={{ alignItems: "center", marginTop: hp("10%") }}>
                  <View style={{ textAlign: "left", padding: 20 }}>
                    {this.state.patientName !== "" ? (
                      <Text
                        style={{ ...styles.inputHeader, textAlign: "left" }}
                      >
                        Name
                      </Text>
                    ) : null}
                    <TextInput
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={this.onChangeName}
                      value={this.state.patientName}
                      style={{ marginTop: 5, marginBottom: 10 }}
                      maxLength={30}
                    />

                    {this.state.patientPhone !== "" ? (
                      <Text
                        style={{ ...styles.inputHeader, textAlign: "left" }}
                      >
                        Phone
                      </Text>
                    ) : null}

                    <TextInput
                      type="tel"
                      name="patientPhone"
                      placeholder="Phone Number"
                      onChange={this.onChangePhone}
                      value={this.state.patientPhone}
                      style={{ marginTop: 5, marginBottom: 10 }}
                      keyboardType="numeric"
                      maxLength={10}
                    />
                    {this.state.patientEmail !== "" ? (
                      <Text style={styles.inputHeader}>Email Message</Text>
                    ) : null}

                    <TextInput
                      multiline={true}
                      type="text"
                      name={"patientEmail"}
                      onChange={this.onChangeEmail}
                      placeholder="Leave a message"
                      value={this.state.patientEmail}
                      style={{ marginTop: 5, width: wp("80%") }}
                    />
                  </View>

                  <View style={styles.emailButtons}>
                    <TouchableOpacity
                      onPress={this.handleSubmit}
                      style={styles.buttonBackground}
                    >
                      <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.emailButtons}>
                    <TouchableOpacity
                      onPress={this.handleBack}
                      style={styles.buttonBackground}
                    >
                      <Text style={styles.submitButtonText}>Back</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ paddingTop: 200 }}></View>
                </View>
              )}
              {this.state.showEmail ? null : (
                <View style={styles.contactBox}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.buttonBackground}
                      onPress={() => Linking.openURL(`tel:5086228777`)}
                    >
                      <Text style={styles.buttonText}>
                        Call us{" "}
                        <FontAwesomeIcon
                          icon="phone"
                          color="#114260"
                          size={20}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.buttonBackground}
                      onPress={() => {
                        this.setState({
                          showEmail: true,
                          patientName: "",
                          patientEmail: "",
                          patientPhone: ""
                        });
                      }}
                    >
                      <Text style={styles.buttonText}>
                        Email us{" "}
                        <FontAwesomeIcon
                          icon="envelope"
                          color="#114260"
                          size={20}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.buttonBackground}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.google.com/maps/place/Advanced+Dental+Care+of+Norton/@41.9615083,-71.2001785,17z/data=!3m1!4b1!4m5!3m4!1s0x89e461d156c36c9f:0xb5fcf264919e17a5!8m2!3d41.9615083!4d-71.1979898"
                        )
                      }
                    >
                      <Text style={styles.buttonText}>
                        Directions{" "}
                        <FontAwesomeIcon
                          icon="map-marker-alt"
                          color="#114260"
                          size={20}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </KeyboardAvoidingView>
          </KeyboardAwareScrollView>
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
    height: 90,
    flex: 1
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#114260",
    marginTop: 15
  },
  logoStyle: {
    flex: 1,
    width: null,
    maxHeight: 400,
    height: hp("40%")
  },
  imgContainer: {
    alignContent: "center",
    flex: 1,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5
  },
  buttonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    textAlign: "center"
  },

  buttonBackground: {
    backgroundColor: "#fcec01"
  },

  buttonContainer: {
    flex: 1,
    marginTop: 10,
    padding: 15,
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "auto"
  },
  contactBox: {
    alignItems: "center",
    flex: 1
  },
  submitButtonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    textAlign: "center"
  },
  emailButtons: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    padding: 15,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "auto",
    marginTop: 30
  },
  inputHeader: {
    textAlign: "center",
    marginTop: 10,
    color: "#114260",
    fontWeight: "bold"
  }
});

export default Home;
