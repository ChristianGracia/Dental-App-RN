import React, { Component } from "react";
import { View, Text } from "react-native";
import { iOSColors } from "react-native-typography";

export default class CrownReasons extends Component {
  render() {
    return (
      <View style={{ padding: 15, fontSize: 15, textAlign: "center" }}>
        <Text>
          <Text style={{ color: iOSColors.blue }}>
            To protect a weak tooth from breaking due to decay or fractures
          </Text>
          {"\n\n"}

          <Text style={{ color: iOSColors.blue }}>
            Restore an already broken tooth
          </Text>
          {"\n\n"}

          <Text style={{ color: iOSColors.blue }}>
            To cover and support a tooth with a large cavity
          </Text>
          {"\n\n"}

          <Text style={{ color: iOSColors.blue }}>
            To hold a dental bridge in place
          </Text>
          {"\n\n"}

          <Text style={{ color: iOSColors.blue }}>
            To cover discolored or disfigured tooth
          </Text>
          {"\n\n"}

          <Text style={{ color: iOSColors.blue }}>
            To cover a dental implant
          </Text>
          {"\n\n"}

          <Text style={{ color: iOSColors.blue }}>
            To make a tooth look better
          </Text>
          {"\n"}
        </Text>
      </View>
    );
  }
}
