import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { iOSColors } from "react-native-typography";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class ImplantsMore extends Component {
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
          <Text style={{ color: iOSColors.blue }}>1{") "}</Text>Your oral
          surgeon reopens your gum to expose the dental implant {"\n\n"}
        </Text>

        <Text style={styles.itempicktext}>
          <Text style={{ color: iOSColors.blue }}>2{") "}</Text>The abutment is
          attached to the dental implant
          {"\n\n"}
        </Text>
        <Text style={styles.itempicktext}>
          <Text style={{ color: iOSColors.blue }}>3{") "}</Text>The gum tissue
          is then closed around, but not over, the abutment
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
          attached.
        </Text>

        <Text style={styles.header}>Choosing your new artificial teeth</Text>

        <Text style={styles.itempicktext}>
          Once your gums heal, you'll have more impressions made of your mouth
          and remaining teeth. These impressions are used to make the crown —
          your realistic-looking artificial tooth. The crown can't be placed
          until your jawbone is strong enough to support use of the new tooth.
          You and your dental specialist can choose artificial teeth that are
          removable, fixed or a combination of both: {"\n\n"}
        </Text>

        <View style={styles.removeFixContainer}>
          <Text style={styles.removeOrFix}>Removable {"\n"}</Text>
          <Text style={styles.itempicktext}>
            This type is similar to a conventional removable denture and can be
            a partial or full denture. It contains artificial white teeth
            surrounded by pink plastic gum. It's mounted on a metal frame that's
            attached to the implant abutment, and it snaps securely into place.
            It can be easily removed for repair or daily cleaning. {"\n"}
          </Text>

          <Text style={styles.removeOrFix}>Fixed {"\n"}</Text>
          <Text style={styles.itempicktext}>
            In this type, an artificial tooth is permanently screwed or cemented
            onto an individual implant abutment. You can't remove the tooth for
            cleaning or during sleep. Most of the time, each crown is attached
            to its own dental implant. However, because implants are
            exceptionally strong, several teeth can be replaced by one implant
            if they're bridged together. {"\n"}
          </Text>
        </View>

        <Text style={styles.header}>Alternative Dental Implant Techniques</Text>

        <Text style={styles.itempicktext}>
          {"\n"}
          Depending on the health of your jawbone and your specific needs, your
          dental implant dentist may suggest some alternative treatment options
          in addition to the traditional multi-step dental implant procedure.
          Options may include:{"\n"}
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
                "data:image/jpeg;base64,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"
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
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/c/ce/Nobel_Biocare_All-on-4_solution_image_1.jpg"
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
