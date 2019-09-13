import React, { Component } from "react";

export default class CrownReasons extends Component {
  render() {
    return (
      <View>
        {" "}
        <Text style={{ color: "red" }}>1{")"}</Text>{" "}
        <Text>
          To protect a weak tooth from breaking due to decay or fractures
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
        <Text style={styles.itemHeader}>Types of Crowns</Text>
        {"\n"}
        {"\n"}
      </View>
    );
  }
}
