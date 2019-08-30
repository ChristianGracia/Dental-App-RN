import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Email extends Component {
  render() {
    return;
    <View>
      <Text>Hi</Text>
      {/*   <form
              action="https://sendpoint.io/id/gWFzbxh9O"
              method="POST"
              style={{}}
            >
              <div class="row">
                <div class="col-md">
                  <div style={{}}></div>
                  <Jump>
                    <i
                      class="fas fa-mail-bulk"
                      style={{ fontSize: 80, color: "white" }}
                    ></i>
                  </Jump>
                </div>
                <div style={{ padding: 10 }}></div>
                <div class="col-md">
                  <input
                    style={{
                      padding: 5
                    }}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder="Name"
                  />
                  <div style={{ padding: 10 }}></div>
                  <input
                    style={{
                      padding: 5
                    }}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div style={{ padding: 20 }}></div>
              <textarea
                rows="4"
                cols="50"
                class=""
                type="text"
                name="body"
                placeholder="Leave a message"
                style={{
                  textAlign: "left",
                  width: "90%",
                  color: "black"
                }}
                value={this.state.body}
                onChange={this.onChange}
              />
              <div style={{ padding: 20 }}></div>
              <input
                className="btn-dark"
                type="submit"
                value="send"
                onClick={e => {
                  if (body == "" || email == "" || name == "") {
                    e.preventDefault();
                    window.alert("Please fill out form");
                  }
                }}
              />
            </form>*/}
    </View>;
  }
}
