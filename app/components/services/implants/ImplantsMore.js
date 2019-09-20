import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { iOSColors } from "react-native-typography";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class ImplantsMore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ paddingTop: 30, flex: 1 }}>
        <Text style={styles.itempicktext}>
          If your jawbone is not able to support dental implants, several
          techniques can be used to rebuild bone, restore your natural jawline
          and provide a sturdy foundation for implant-supported teeth. These
          include:{"\n\n"}
        </Text>

        <Text style={styles.headerTech}>Bone graft{"\n"}</Text>

        <Text style={styles.itempicktext}>
          If your jawbone isn't thick enough or is too soft, you may need bone
          grafting before you can have dental implant surgery. That's because
          the powerful chewing action of your mouth exerts great pressure on
          your bone, and if it can't support the implant, the surgery likely
          would fail.
        </Text>

        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/37/my00084_im04754_mcdc7_jawbone_graftthu_jpg.png"
            }}
          />
        </View>

        <Text style={styles.itempicktext}>
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
        </Text>

        <Text style={styles.headerTech}>Sinus lift{"\n"}</Text>
        <Text style={styles.itempicktext}>
          Also called sinus augmentation or sinus elevation, this involves
          adding bone below the sinus in cases where natural bone has
          deteriorated due to missing upper back teeth.
        </Text>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/Sinus_lift.gif"
            }}
          />
        </View>
        <Text style={styles.headerTech}>Ridge expansion{"\n"}</Text>

        <Text style={styles.itempicktext}>
          If your jaw isn’t wide enough to support dental implants, bone graft
          material can be added to a small ridge, or space, created along the
          top of your jaw.{"\n\n"}
        </Text>
        <Text style={styles.itemHeader}>Implant Steps</Text>
        <View style={{ padding: 15 }}></View>

        <Text style={styles.header}>Placing the implant</Text>
        <Text style={styles.itempicktext}>
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
        </Text>

        <Text style={styles.header}>Placing the abutment</Text>
        <Text style={styles.itempicktext}>
          When osseointegration is complete, you may need additional surgery to
          place the abutment — the piece where the crown will eventually attach.
          This minor surgery is typically done with local anesthesia in an
          outpatient setting. To place the abutment:
          {"\n\n"}
        </Text>

        <Text style={styles.itempicktext}>
          1{") "}Your oral surgeon reopens your gum to expose the dental implant{" "}
          {"\n\n"}
        </Text>

        <Text style={styles.itempicktext}>
          2{") "}The abutment is attached to the dental implant
          {"\n\n"}
        </Text>
        <Text style={styles.itempicktext}>
          3{") "}The gum tissue is then closed around, but not over, the
          abutment
          {"\n\n"}
          {"\n\n"}
          In some cases, the abutment is attached to the dental implant metal
          post when the post is implanted. That means you won't need an extra
          surgical step. Because the abutment juts past the gumline, however,
          it's visible when you open your mouth — and it will be that way until
          your dentist completes the tooth prosthesis.
          {"\n\n"}
          Some people don't like that appearance and prefer to have the abutment
          placed in a separate procedure. After the abutment is placed, your
          gums must heal for about two weeks before the artificial tooth can be
          attached.{"\n\n"}
        </Text>

        <Text style={styles.header}>
          Choosing your new artificial teeth {"\n\n"}
        </Text>

        <Text style={styles.itempicktext}>
          Once your gums heal, you'll have more impressions made of your mouth
          and remaining teeth. These impressions are used to make the crown —
          your realistic-looking artificial tooth. The crown can't be placed
          until your jawbone is strong enough to support use of the new tooth.
          You and your dental specialist can choose artificial teeth that are
          removable, fixed or a combination of both: {"\n\n"}{" "}
        </Text>

        <View style={styles.removeFixContainer}>
          <Text style={styles.removeOrFix}>Removable {"\n\n"}</Text>
          <Text style={styles.itempicktext}>
            This type is similar to a conventional removable denture and can be
            a partial or full denture. It contains artificial white teeth
            surrounded by pink plastic gum. It's mounted on a metal frame that's
            attached to the implant abutment, and it snaps securely into place.
            It can be easily removed for repair or daily cleaning. {"\n\n"}
          </Text>

          <Text style={styles.removeOrFix}>Fixed {"\n\n"}</Text>
          <Text style={styles.itempicktext}>
            In this type, an artificial tooth is permanently screwed or cemented
            onto an individual implant abutment. You can't remove the tooth for
            cleaning or during sleep. Most of the time, each crown is attached
            to its own dental implant. However, because implants are
            exceptionally strong, several teeth can be replaced by one implant
            if they're bridged together. {"\n\n"}
          </Text>
        </View>

        <Text style={styles.header}>Alternative Dental Implant Techniques</Text>

        <Text style={styles.itempicktext}>
          {"\n\n"}
          Depending on the health of your jawbone and your specific needs, your
          dental implant dentist may suggest some alternative treatment options
          in addition to the traditional multi-step dental implant procedure.
          Options may include:{"\n\n"}
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.altDentalTech}>
            Immediate Load Dental Implants
          </Text>

          <Text style={styles.itempicktext}>
            {"\n\n"}
            Also called as same day implants or Teeth in a Day®, immediate load
            dental implants allow placement of a temporary tooth during the same
            appointment as your dental implant placement. This may be a good
            option if you have enough natural bone and an implant secure enough
            to support immediate placement and pressure on the new temporary
            tooth. {"\n\n"}Here at Advanced Dental Care of Norton, we specialize
            in immediate load implant so you can leave our office after an
            implant procedure without any gaps in your smile
          </Text>

          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://friedmandentalgroup.com/wp-content/uploads/2015/07/non-removable-same-day-dental-Implants.jpg"
            }}
          />

          <Text style={styles.altDentalTech}>{"\n\n"}All-on-4</Text>

          <Text style={styles.itempicktext}>
            {"\n\n"}All-on-4 is an alternative to placing a top or bottom set of
            replacement teeth, called a full arch. Four dental implants (6 for
            "All-on-6" available) are placed in available bone, avoiding the
            need for bone grafting. Special abutments are used so that a
            temporary set of replacement teeth can be placed the same day. You
            follow a modified diet while the gum tissues heal and the implants
            bond with your natural bone. After about six months, the permanent
            replacement teeth will be placed and you can resume a regular diet.
            {"\n\n"}
            When replacing multiple teeth, less implants are typically used to
            support many teeth. For example, to replace the entire top row of a
            patient’s teeth, 4 or 6 implants may be enough to support them all.
            Similarly, three missing teeth can be supported by two implants. The
            dental implants cost is typically higher when it comes to replacing
            multiple teeth, but is definitely the most beneficial and valuable
            option.
          </Text>

          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri: "https://miro.medium.com/max/665/0*VvamRkkK2eSSzqHG.png"
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  removeFixContainer: {},
  header: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center"
  },
  headerTech: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: iOSColors.red
  },
  itempicktext: {
    color: "#114260",
    fontSize: 20,
    alignItems: "center",
    padding: 15
  },

  removeOrFix: {
    color: iOSColors.blue,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  altDentalTech: {
    fontWeight: "bold",
    textAlign: "center",
    color: iOSColors.red,
    fontSize: 22
  },
  imgSizer: {
    width: wp("80%"),
    height: hp("50%"),
    marginLeft: wp("25%"),
    marginRight: wp("25%")
  },
  itemHeader: {
    color: "#114260",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fcec01"
  }
});
