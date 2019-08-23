import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Dentures extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Dentures</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "http://familydentistry.webhost.io/wp-content/uploads/2016/07/Dentures-sets-300x300.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            <Text>
              Dentures are removable appliances that can replace missing teeth
              and help restore your smile. If you’ve lost all of your natural
              teeth, whether from gum disease, tooth decay or injury, replacing
              missing teeth will benefit your appearance and your health. That’s
              because dentures make it easier to eat and speak better than you
              could without teeth—things that people often take for granted.
              {"\n\n"}When you lose all of your teeth, facial muscles can sag,
              making you look older. Dentures can help fill out the appearance
              of your face and profile. They can be made to closely resemble
              your natural teeth so that your appearance does not change much.
              Dentures may even improve the look of your smile.
            </Text>
            <Text>
              Types of dentures:{"\n\n"}
              Conventional{"\n\n"}
              This full removable denture is made and placed in your mouth after
              the remaining teeth are removed and tissues have healed, which may
              take several months.{"\n\n"}
              Immediate{"\n\n"}
              This removable denture is inserted on the same day that the
              remaining teeth are removed. Your dentist will take measurements
              and make models of your jaw during a preliminary visit. You don’t
              have to be without teeth during the healing period, but may need
              to have the denture relined or remade after your jaw has healed.
              {"\n\n"} Overdenture{"\n\n"}
              Sometimes some of your teeth can be saved to preserve your jawbone
              and provide stability and support for the denture. An overdenture
              fits over a small number of remaining natural teeth after they
              have been prepared by your dentist. Implants can serve the same
              function, too.
            </Text>
            <Text>
              New dentures may feel awkward for a few weeks until you become
              accustomed to them. The dentures may feel loose while the muscles
              of your cheek and tongue learn to keep them in place.{"\n\n"} It
              is not unusual to experience minor irritation or soreness. You may
              find that saliva flow temporarily increases. As your mouth becomes
              accustomed to the dentures, these problems should go away.{"\n\n"}
              Follow-up appointments with the dentist are generally needed after
              a denture is inserted so the fit can be checked and adjusted. If
              any problem persists, particularly irritation or soreness, be sure
              to consult your dentist.
            </Text>
            <Text>
              Like your teeth, your dentures should be brushed daily to remove
              food particles and plaque.{"\n\n"}Brushing also can help keep the
              teeth from staining.{"\n\n"}Rinse your dentures before brushing to
              remove any loose food or debris.{"\n\n"}Use a soft bristle
              toothbrush and a non-abrasive cleanser to gently brush all the
              surfaces of the dentures so they don't get scratched.{"\n\n"}When
              brushing, clean your mouth thoroughly—including your gums, cheeks,
              roof of your mouth and tongue to remove any plaque.{"\n\n"}This
              can help reduce the risk of oral irritation and bad breath.
              {"\n\n"}When you’re not wearing your dentures, put them in a safe
              place covered in water to keep them from warping.
            </Text>
            <Text>
              Occasionally, denture wearers may use adhesives. Adhesives come in
              many forms: creams, powders, pads/wafers, strips or liquids. If
              you use one of these products, read the instructions, and use them
              exactly as directed.{"\n\n"}Your dentist can recommend appropriate
              cleansers and adhesives; look for products with the ADA Seal of
              Acceptance. Products with the ADA Seal have been evaluated for
              safety and effectiveness.{"\n\n"}If you have any questions about
              your dentures, or if they stop fitting well or become damaged,
              contact your us! Be sure to schedule regular dental checkups, too!
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>How Are Dentures Made?</Text>
              {"\n\n"}The denture development process takes a few weeks and
              several appointments. Once your dentist or prosthodontist (a
              dentist who specializes in the restoration and replacement of
              teeth) determines what type of appliance is best for you.
            </Text>
            <Text>Denture Creation</Text>
            <Text>
              Make a series of impressions of your jaw and take measurements of
              how your jaws relate to one another and how much space is between
              them.{"\n\n"}Create models, wax forms, and/or plastic patterns in
              the exact shape and position of the denture to be made.
              {"\n\n"}You will "try in" this model several times and the denture
              will be assessed for color, shape, and fit before the final
              denture is cast.{"\n\n"}Create a final denture.
              {"\n\n"}Make adjustments to fit if/as necessary
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>
                Will Eating With New Dentures Be Difficult?
              </Text>
              {"\n\n"}Eating with new dentures will take a little practice and
              may be uncomfortable for some wearers for a few weeks. To get used
              to the new denture, start with soft foods cut into small pieces.
              Chew slowly using both sides of your mouth.
              {"\n\n"}As you get used to new dentures, add other foods until you
              return to a normal diet. Be cautious with hot or hard foods and
              sharp-edged bones or shells. Avoid foods that are extremely sticky
              or hard.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20
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
  imgSizer: {
    width: "100%",
    height: hp("45%"),
    marginTop: 15
  }
});

export default Dentures;
