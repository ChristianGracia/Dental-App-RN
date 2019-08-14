import React, { Component } from "react";
import { View, Text } from "react-native";
import { iOSColors } from "react-native-typography";

export default class ImplantsMore extends Component {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <Text style={{ fontSize: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Bone graft{"\n\n"}</Text>If your
          jawbone isn't thick enough or is too soft, you may need bone grafting
          before you can have dental implant surgery. That's because the
          powerful chewing action of your mouth exerts great pressure on your
          bone, and if it can't support the implant, the surgery likely would
          fail.
          {"\n\n"}A bone graft can create a more solid base for the implant.
          There are several bone graft materials that can be used to rebuild a
          jawbone. Options may include a natural bone graft, such as from
          another location in your body, or a synthetic bone graft, such as
          bone-substitute material that can provide support structures for new
          bone growth. Talk to your doctor about options that will work best for
          you.
          {"\n\n"}It may take several months for the transplanted bone to grow
          enough new bone to support a dental implant. In some cases, you may
          need only minor bone grafting, which can be done at the same time as
          the implant surgery. The condition of your jawbone determines how you
          proceed.{"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Placing the dental implant{"\n\n"}
          </Text>
          During surgery to place the dental implant, your oral surgeon makes a
          cut to open your gum and expose the bone. Holes are drilled into the
          bone where the dental implant metal post will be placed. Since the
          post will serve as the tooth root, it's implanted deep into the bone.
          At this point, you'll still have a gap where your tooth is missing.
          {"\n\n"} A type of partial, temporary denture can be placed for
          appearance, if needed. You can remove this denture for cleaning and
          while you sleep. Waiting for bone growth Once the metal implant post
          is placed in your jawbone, osseointegration begins.
          {"\n\n"}During this process, the jawbone grows into and unites with
          the surface of the dental implant. This process, which can take
          several months, helps provide a solid base for your new artificial
          tooth — just as roots do for your natural teeth.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Placing the Abutment {"\n\n"}
          </Text>
          When osseointegration is complete, you may need additional surgery to
          place the abutment — the piece where the crown will eventually attach.
          This minor surgery is typically done with local anesthesia in an
          outpatient setting. To place the abutment:
          {"\n\n"}
          <Text style={{ color: iOSColors.blue }}>1{") "}</Text>Your oral
          surgeon reopens your gum to expose the dental implant {"\n\n"}
          <Text style={{ color: iOSColors.blue }}>2{") "}</Text> The abutment is
          attached to the dental implant
          {"\n\n"}
          <Text style={{ color: iOSColors.blue }}>3{") "}</Text>The gum tissue
          is then closed around, but not over, the abutment{"\n\n"}
        </Text>
      </View>
    );
  }
}
