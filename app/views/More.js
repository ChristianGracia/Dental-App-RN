import React, { Component } from "react";
import Forms from "../components/Forms";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { iOSColors } from "react-native-typography";
import { SafeAreaView } from "react-navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOther: true,
      showReview: false,
      showSuggestion: false,
      showTextFields: true,
      patientReview: "",
      patientSuggestion: "",
      showForms: true
    };
    this.handleReview = this.handleReview.bind(this);
    this.handleSuggestion = this.handleSuggestion.bind(this);
  }
  handleReview = e => {
    this.setState({
      showTextFields: false,
      showReview: true,
      showOther: false,
      showForms: false
    });
  };
  handleSuggestion = e => {
    this.setState({
      showTextFields: false,
      showSuggestion: true,
      showOther: false,
      showForms: false
    });
  };
  onChangeReview = e => {
    this.setState({ patientReview: e.nativeEvent.text });
    console.log(this.state.patientReview);
  };
  onChangeSuggestion = e => {
    this.setState({ patientSuggestion: e.nativeEvent.text });
    console.log(this.state.patientSuggestion);
  };
  handleReviewSubmit = e => {
    if (this.state.patientReview !== "") {
      fetch("https://sendpoint.io/id/MsfrYX08-", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "anonymous",
          review: this.state.patientReview
        })
      });
      this.setState({
        patientReview: "",
        showOther: true,
        showReview: false,
        showTextFields: true,
        showForms: true
      });
      alert("Review Received!");
    } else {
      alert("Please leave a review!");
    }
  };
  handleSuggestionSubmit = e => {
    if (this.state.patientSuggestion !== "") {
      fetch("https://sendpoint.io/id/LA3afJK4H", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "suggestion",
          review: this.state.patientSuggestion
        })
      });
      this.setState({
        patientSuggestion: "",
        showOther: true,
        showSuggestion: false,
        showTextFields: true,
        showForms: true
      });
      alert("Suggestion Received!");
    } else {
      alert("Please leave a suggestion!");
    }
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
                <Text style={styles.header}>More</Text>
              </View>
              <View style={styles.headerSpacing} />

              <View style={styles.buttonContainer}>
                {this.state.showTextFields ? (
                  <Text style={styles.titleHeaders}>
                    Tell us what you think!
                  </Text>
                ) : null}
                {!this.state.showTextFields ? null : (
                  <View>
                    <View>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.handleReview}
                      >
                        <Text style={styles.buttonText}>Anonymous Review</Text>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this.handleSuggestion}
                      >
                        <Text style={styles.buttonText}>App Suggestions</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                <View style={{ marginBottom: 20 }}></View>

                {this.state.showReview ? (
                  <View style={{ alignItems: "center" }}>
                    <TextInput
                      multiline={true}
                      type="text"
                      name={"patientReview"}
                      onChange={this.onChangeReview}
                      placeholder="Leave an anonymous review/comment"
                      value={this.state.patientReview}
                      style={{ marginTop: 5, width: wp("80%") }}
                    />

                    <TouchableOpacity
                      onPress={this.handleReviewSubmit}
                      style={{
                        ...styles.buttonStyle,
                        width: "40%",
                        marginTop: 30
                      }}
                    >
                      <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
                {this.state.showSuggestion ? (
                  <View style={{ alignItems: "center" }}>
                    <TextInput
                      multiline={true}
                      type="text"
                      name={"patientSugesstion"}
                      onChange={this.onChangeSuggestion}
                      placeholder="What would you like added to this app?"
                      value={this.state.patientSuggestion}
                      style={{ marginTop: 5, width: wp("80%") }}
                    />
                    <TouchableOpacity
                      onPress={this.handleSuggestionSubmit}
                      style={{
                        ...styles.buttonStyle,
                        width: "40%",
                        marginTop: 30
                      }}
                    >
                      <Text style={{ ...styles.buttonText }}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}

                {this.state.showOther ? null : (
                  <View>
                    <TouchableOpacity
                      style={{
                        ...styles.buttonStyle,
                        backgroundColor: "#114260"
                      }}
                      onPress={() =>
                        this.setState({
                          showOther: true,
                          showReview: false,
                          showSuggestion: false,
                          showTextFields: true,
                          showForms: true
                        })
                      }
                    >
                      <Text
                        style={{
                          ...styles.buttonText,
                          color: "#fcec01",
                          backgroundColor: "#114260"
                        }}
                      >
                        Back
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                {this.state.showForms ? (
                  <View>
                    <Text style={styles.titleHeaders}>Forms</Text>
                    <Forms />
                  </View>
                ) : null}
              </View>
            </KeyboardAvoidingView>
          </KeyboardAwareScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
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
  headerSpacing: {
    paddingTop: 30
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1
  },
  titleHeaders: {
    fontSize: 25,
    color: "#114260",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 10,
    padding: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    textAlign: "center"
  },
  buttonHeaders: {
    color: iOSColors.blue,
    marginTop: 20,
    fontWeight: "bold"
  }
});

export default Contact;
