import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  Label
} from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.headerDiv}>
            <Text style={{ ...styles.header, fontFamily: "Verdana-Bold" }}>Testing Font</Text>
          </View>
          <View style={styles.headerSpacing} />

          <View style={styles.formsContainer}>
            <Text style={styles.formHeader}>Forms</Text>
            <TouchableOpacity
              style={styles.formsText}
              onPress={() =>
                Linking.openURL(
                  "https://www.ident.ws/template_include/new_patient_sign_in.do?site=14740&practiceId=22404"
                )
              }
            >
              <Text style={styles.formButtonText}>New Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.formsText}
              onPress={() =>
                Linking.openURL(
                  "https://www.adcofnorton.com/Content/Patient-Forms/Financial-Policy-2012.pdf"
                )
              }
            >
              <Text style={styles.formButtonText}>Financial Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.formsText}
              onPress={() =>
                Linking.openURL(
                  "https://www.adcofnorton.com/Content/Patient-Forms/ADC-Medical-Spa-Patient-Information.pdf"
                )
              }
            >
              <Text style={styles.formButtonText}>Spa Patient Info</Text>
            </TouchableOpacity>
          </View>
          <View> 
            
            <Text>Pay your balance now with Paypal!</Text> 
            <TouchableOpacity
              style={styles.formsText}
              onPress={() =>
               alert("paypal pressed")
                )
              }
          >
               <Text style={styles.formButtonText}>Pay Now!</Text>
            </TouchableOpacity>

          </View>


        <Text style={{paddingTop: 30, paddingBottom: 20, textAlign: "center", fontWeight: "bold", fontSize: 30}}>In box font list for testing ( will remove when I decide fonts for app)</Text>
            <Text style={{ fontSize: 20, fontFamily: 'Academy Engraved LET' }}>Academy Engraved LET </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AcademyEngravedLetPlain' }}>AcademyEngravedLetPlain </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Al Nile' }}>Al Nile </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AlNile-Bold' }}>AlNile-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'American Typewriter' }}>American Typewriter </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AmericanTypewriter-Bold' }}>AmericanTypewriter-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AmericanTypewriter-Condensed' }}>AmericanTypewriter-Condensed </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AmericanTypewriter-CondensedBold' }}>AmericanTypewriter-CondensedBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AmericanTypewriter-CondensedLight' }}>AmericanTypewriter-CondensedLight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AmericanTypewriter-Light' }}>AmericanTypewriter-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Apple Color Emoji' }}>Apple Color Emoji </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Apple SD Gothic Neo' }}>Apple SD Gothic Neo </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleColorEmoji' }}>AppleColorEmoji </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleSDGothicNeo-Bold' }}>AppleSDGothicNeo-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleSDGothicNeo-Light' }}>AppleSDGothicNeo-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleSDGothicNeo-Medium' }}>AppleSDGothicNeo-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleSDGothicNeo-Regular' }}>AppleSDGothicNeo-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleSDGothicNeo-SemiBold' }}>AppleSDGothicNeo-SemiBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleSDGothicNeo-Thin' }}>AppleSDGothicNeo-Thin </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AppleSDGothicNeo-UltraLight' }}>AppleSDGothicNeo-UltraLight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Arial' }}>Arial </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Arial Hebrew' }}>Arial Hebrew </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Arial Rounded MT Bold' }}>Arial Rounded MT Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Arial-BoldItalicMT' }}>Arial-BoldItalicMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Arial-BoldMT' }}>Arial-BoldMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Arial-ItalicMT' }}>Arial-ItalicMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ArialHebrew' }}>ArialHebrew </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ArialHebrew-Bold' }}>ArialHebrew-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ArialHebrew-Light' }}>ArialHebrew-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ArialMT' }}>ArialMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ArialRoundedMTBold' }}>ArialRoundedMTBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir' }}>Avenir </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir Next' }}>Avenir Next </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir Next Condensed' }}>Avenir Next Condensed </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-Black' }}>Avenir-Black </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-BlackOblique' }}>Avenir-BlackOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-Book' }}>Avenir-Book </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-BookOblique' }}>Avenir-BookOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-Heavy' }}>Avenir-Heavy </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-HeavyOblique' }}>Avenir-HeavyOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-Light' }}>Avenir-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-LightOblique' }}>Avenir-LightOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-Medium' }}>Avenir-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-MediumOblique' }}>Avenir-MediumOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-Oblique' }}>Avenir-Oblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Avenir-Roman' }}>Avenir-Roman </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-Bold' }}>AvenirNext-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-BoldItalic' }}>AvenirNext-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-DemiBold' }}>AvenirNext-DemiBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-DemiBoldItalic' }}>AvenirNext-DemiBoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-Heavy' }}>AvenirNext-Heavy </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-HeavyItalic' }}>AvenirNext-HeavyItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-Italic' }}>AvenirNext-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-Medium' }}>AvenirNext-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-MediumItalic' }}>AvenirNext-MediumItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-Regular' }}>AvenirNext-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-UltraLight' }}>AvenirNext-UltraLight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNext-UltraLightItalic' }}>AvenirNext-UltraLightItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-Bold' }}>AvenirNextCondensed-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-BoldItalic' }}>AvenirNextCondensed-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-DemiBold' }}>AvenirNextCondensed-DemiBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-DemiBoldItalic' }}>AvenirNextCondensed-DemiBoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-Heavy' }}>AvenirNextCondensed-Heavy </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-HeavyItalic' }}>AvenirNextCondensed-HeavyItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-Italic' }}>AvenirNextCondensed-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-Medium' }}>AvenirNextCondensed-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-MediumItalic' }}>AvenirNextCondensed-MediumItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-Regular' }}>AvenirNextCondensed-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-UltraLight' }}>AvenirNextCondensed-UltraLight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-UltraLightItalic' }}>AvenirNextCondensed-UltraLightItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Bangla Sangam MN' }}>Bangla Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Baskerville' }}>Baskerville </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Baskerville-Bold' }}>Baskerville-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Baskerville-BoldItalic' }}>Baskerville-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Baskerville-Italic' }}>Baskerville-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Baskerville-SemiBold' }}>Baskerville-SemiBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Baskerville-SemiBoldItalic' }}>Baskerville-SemiBoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Bodoni 72' }}>Bodoni 72 </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Bodoni 72 Oldstyle' }}>Bodoni 72 Oldstyle </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Bodoni 72 Smallcaps' }}>Bodoni 72 Smallcaps </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Bodoni Ornaments' }}>Bodoni Ornaments </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BodoniOrnamentsITCTT' }}>BodoniOrnamentsITCTT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BodoniSvtyTwoITCTT-Bold' }}>BodoniSvtyTwoITCTT-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BodoniSvtyTwoITCTT-Book' }}>BodoniSvtyTwoITCTT-Book </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BodoniSvtyTwoITCTT-BookIta' }}>BodoniSvtyTwoITCTT-BookIta </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BodoniSvtyTwoOSITCTT-Bold' }}>BodoniSvtyTwoOSITCTT-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BodoniSvtyTwoOSITCTT-Book' }}>BodoniSvtyTwoOSITCTT-Book </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BodoniSvtyTwoSCITCTT-Book' }}>BodoniSvtyTwoSCITCTT-Book </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Bradley Hand' }}>Bradley Hand </Text>
            <Text style={{ fontSize: 20, fontFamily: 'BradleyHandITCTT-Bold' }}>BradleyHandITCTT-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Chalkboard SE' }}>Chalkboard SE </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ChalkboardSE-Bold' }}>ChalkboardSE-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ChalkboardSE-Light' }}>ChalkboardSE-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ChalkboardSE-Regular' }}>ChalkboardSE-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Chalkduster' }}>Chalkduster </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Chalkduster' }}>Chalkduster </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Cochin' }}>Cochin </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Cochin-Bold' }}>Cochin-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Cochin-BoldItalic' }}>Cochin-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Cochin-Italic' }}>Cochin-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Copperplate' }}>Copperplate </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Copperplate-Bold' }}>Copperplate-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Copperplate-Light' }}>Copperplate-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Courier' }}>Courier </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Courier New' }}>Courier New </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Courier-Bold' }}>Courier-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Courier-BoldOblique' }}>Courier-BoldOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Courier-Oblique' }}>Courier-Oblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'CourierNewPS-BoldItalicMT' }}>CourierNewPS-BoldItalicMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'CourierNewPS-BoldMT' }}>CourierNewPS-BoldMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'CourierNewPS-ItalicMT' }}>CourierNewPS-ItalicMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'CourierNewPSMT' }}>CourierNewPSMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Damascus' }}>Damascus </Text>
            <Text style={{ fontSize: 20, fontFamily: 'DamascusBold' }}>DamascusBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'DamascusLight' }}>DamascusLight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'DamascusMedium' }}>DamascusMedium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'DamascusSemiBold' }}>DamascusSemiBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Devanagari Sangam MN' }}>Devanagari Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'DevanagariSangamMN' }}>DevanagariSangamMN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'DevanagariSangamMN-Bold' }}>DevanagariSangamMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Didot' }}>Didot </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Didot-Bold' }}>Didot-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Didot-Italic' }}>Didot-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'DiwanMishafi' }}>DiwanMishafi </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Euphemia UCAS' }}>Euphemia UCAS </Text>
            <Text style={{ fontSize: 20, fontFamily: 'EuphemiaUCAS-Bold' }}>EuphemiaUCAS-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'EuphemiaUCAS-Italic' }}>EuphemiaUCAS-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Farah' }}>Farah </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Futura' }}>Futura </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Futura-CondensedExtraBold' }}>Futura-CondensedExtraBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Futura-CondensedMedium' }}>Futura-CondensedMedium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Futura-Medium' }}>Futura-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Futura-MediumItalic' }}>Futura-MediumItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Geeza Pro' }}>Geeza Pro </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GeezaPro-Bold' }}>GeezaPro-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Georgia' }}>Georgia </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Georgia-Bold' }}>Georgia-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Georgia-BoldItalic' }}>Georgia-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Georgia-Italic' }}>Georgia-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Gill Sans' }}>Gill Sans </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-Bold' }}>GillSans-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-BoldItalic' }}>GillSans-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-Italic' }}>GillSans-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-Light' }}>GillSans-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-LightItalic' }}>GillSans-LightItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-SemiBold' }}>GillSans-SemiBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-SemiBoldItalic' }}>GillSans-SemiBoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GillSans-UltraBold' }}>GillSans-UltraBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Gujarati Sangam MN' }}>Gujarati Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GujaratiSangamMN' }}>GujaratiSangamMN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GujaratiSangamMN-Bold' }}>GujaratiSangamMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Gurmukhi MN' }}>Gurmukhi MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'GurmukhiMN-Bold' }}>GurmukhiMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Heiti SC' }}>Heiti SC </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Heiti TC' }}>Heiti TC </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Helvetica' }}>Helvetica </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Helvetica Neue' }}>Helvetica Neue </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Helvetica-Bold' }}>Helvetica-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Helvetica-BoldOblique' }}>Helvetica-BoldOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Helvetica-Light' }}>Helvetica-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Helvetica-LightOblique' }}>Helvetica-LightOblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Helvetica-Oblique' }}>Helvetica-Oblique </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-Bold' }}>HelveticaNeue-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-BoldItalic' }}>HelveticaNeue-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-CondensedBlack' }}>HelveticaNeue-CondensedBlack </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-CondensedBold' }}>HelveticaNeue-CondensedBold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-Italic' }}>HelveticaNeue-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-Light' }}>HelveticaNeue-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-LightItalic' }}>HelveticaNeue-LightItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-Medium' }}>HelveticaNeue-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-MediumItalic' }}>HelveticaNeue-MediumItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-Thin' }}>HelveticaNeue-Thin </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-ThinItalic' }}>HelveticaNeue-ThinItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-UltraLight' }}>HelveticaNeue-UltraLight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-UltraLightItalic' }}>HelveticaNeue-UltraLightItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Hiragino Mincho ProN' }}>Hiragino Mincho ProN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Hiragino Sans' }}>Hiragino Sans </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HiraginoSans-W3' }}>HiraginoSans-W3 </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HiraginoSans-W6' }}>HiraginoSans-W6 </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HiraMinProN-W3' }}>HiraMinProN-W3 </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HiraMinProN-W6' }}>HiraMinProN-W6 </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Hoefler Text' }}>Hoefler Text </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HoeflerText-Black' }}>HoeflerText-Black </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HoeflerText-BlackItalic' }}>HoeflerText-BlackItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HoeflerText-Italic' }}>HoeflerText-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'HoeflerText-Regular' }}>HoeflerText-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Iowan Old Style' }}>Iowan Old Style </Text>
            <Text style={{ fontSize: 20, fontFamily: 'IowanOldStyle-Bold' }}>IowanOldStyle-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'IowanOldStyle-BoldItalic' }}>IowanOldStyle-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'IowanOldStyle-Italic' }}>IowanOldStyle-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'IowanOldStyle-Roman' }}>IowanOldStyle-Roman </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Kailasa' }}>Kailasa </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Kailasa-Bold' }}>Kailasa-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Kannada Sangam MN' }}>Kannada Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KannadaSangamMN' }}>KannadaSangamMN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KannadaSangamMN-Bold' }}>KannadaSangamMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Khmer Sangam MN' }}>Khmer Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Kohinoor Bangla' }}>Kohinoor Bangla </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Kohinoor Devanagari' }}>Kohinoor Devanagari </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Kohinoor Telugu' }}>Kohinoor Telugu </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorBangla-Light' }}>KohinoorBangla-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorBangla-Regular' }}>KohinoorBangla-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorBangla-Semibold' }}>KohinoorBangla-Semibold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorDevanagari-Light' }}>KohinoorDevanagari-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorDevanagari-Regular' }}>KohinoorDevanagari-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorDevanagari-Semibold' }}>KohinoorDevanagari-Semibold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorTelugu-Light' }}>KohinoorTelugu-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorTelugu-Medium' }}>KohinoorTelugu-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'KohinoorTelugu-Regular' }}>KohinoorTelugu-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Lao Sangam MN' }}>Lao Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Malayalam Sangam MN' }}>Malayalam Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'MalayalamSangamMN' }}>MalayalamSangamMN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'MalayalamSangamMN-Bold' }}>MalayalamSangamMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Marker Felt' }}>Marker Felt </Text>
            <Text style={{ fontSize: 20, fontFamily: 'MarkerFelt-Thin' }}>MarkerFelt-Thin </Text>
            <Text style={{ fontSize: 20, fontFamily: 'MarkerFelt-Wide' }}>MarkerFelt-Wide </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Menlo' }}>Menlo </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Menlo-Bold' }}>Menlo-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Menlo-BoldItalic' }}>Menlo-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Menlo-Italic' }}>Menlo-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Menlo-Regular' }}>Menlo-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Mishafi' }}>Mishafi </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Noteworthy' }}>Noteworthy </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Noteworthy-Bold' }}>Noteworthy-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Noteworthy-Light' }}>Noteworthy-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Optima' }}>Optima </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Optima-Bold' }}>Optima-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Optima-BoldItalic' }}>Optima-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Optima-ExtraBlack' }}>Optima-ExtraBlack </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Optima-Italic' }}>Optima-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Optima-Regular' }}>Optima-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Oriya Sangam MN' }}>Oriya Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'OriyaSangamMN' }}>OriyaSangamMN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'OriyaSangamMN-Bold' }}>OriyaSangamMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Palatino' }}>Palatino </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Palatino-Bold' }}>Palatino-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Palatino-BoldItalic' }}>Palatino-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Palatino-Italic' }}>Palatino-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Palatino-Roman' }}>Palatino-Roman </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Papyrus' }}>Papyrus </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Papyrus-Condensed' }}>Papyrus-Condensed </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Party LET' }}>Party LET </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PartyLetPlain' }}>PartyLetPlain </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFang HK' }}>PingFang HK </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFang SC' }}>PingFang SC </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFang TC' }}>PingFang TC </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangHK-Light' }}>PingFangHK-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangHK-Medium' }}>PingFangHK-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangHK-Regular' }}>PingFangHK-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangHK-Semibold' }}>PingFangHK-Semibold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangHK-Thin' }}>PingFangHK-Thin </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangHK-Ultralight' }}>PingFangHK-Ultralight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangSC-Light' }}>PingFangSC-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangSC-Medium' }}>PingFangSC-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangSC-Regular' }}>PingFangSC-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangSC-Semibold' }}>PingFangSC-Semibold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangSC-Thin' }}>PingFangSC-Thin </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangSC-Ultralight' }}>PingFangSC-Ultralight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangTC-Light' }}>PingFangTC-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangTC-Medium' }}>PingFangTC-Medium </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangTC-Regular' }}>PingFangTC-Regular </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangTC-Semibold' }}>PingFangTC-Semibold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangTC-Thin' }}>PingFangTC-Thin </Text>
            <Text style={{ fontSize: 20, fontFamily: 'PingFangTC-Ultralight' }}>PingFangTC-Ultralight </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Savoye LET' }}>Savoye LET </Text>
            <Text style={{ fontSize: 20, fontFamily: 'SavoyeLetPlain' }}>SavoyeLetPlain </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Sinhala Sangam MN' }}>Sinhala Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'SinhalaSangamMN' }}>SinhalaSangamMN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'SinhalaSangamMN-Bold' }}>SinhalaSangamMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Snell Roundhand' }}>Snell Roundhand </Text>
            <Text style={{ fontSize: 20, fontFamily: 'SnellRoundhand-Black' }}>SnellRoundhand-Black </Text>
            <Text style={{ fontSize: 20, fontFamily: 'SnellRoundhand-Bold' }}>SnellRoundhand-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Symbol' }}>Symbol </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Tamil Sangam MN' }}>Tamil Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'TamilSangamMN-Bold' }}>TamilSangamMN-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Telugu Sangam MN' }}>Telugu Sangam MN </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Thonburi' }}>Thonburi </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Thonburi-Bold' }}>Thonburi-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Thonburi-Light' }}>Thonburi-Light </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Times New Roman' }}>Times New Roman </Text>
            <Text style={{ fontSize: 20, fontFamily: 'TimesNewRomanPS-BoldItalicMT' }}>TimesNewRomanPS-BoldItalicMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'TimesNewRomanPS-BoldMT' }}>TimesNewRomanPS-BoldMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'TimesNewRomanPS-ItalicMT' }}>TimesNewRomanPS-ItalicMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'TimesNewRomanPSMT' }}>TimesNewRomanPSMT </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Trebuchet MS' }}>Trebuchet MS </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Trebuchet-BoldItalic' }}>Trebuchet-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'TrebuchetMS-Bold' }}>TrebuchetMS-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'TrebuchetMS-Italic' }}>TrebuchetMS-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Verdana' }}>Verdana </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Verdana-Bold' }}>Verdana-Bold </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Verdana-BoldItalic' }}>Verdana-BoldItalic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Verdana-Italic' }}>Verdana-Italic </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Zapf Dingbats' }}>Zapf Dingbats </Text>
            <Text style={{ fontSize: 20, fontFamily: 'ZapfDingbatsITC' }}>ZapfDingbatsITC </Text>
            <Text style={{ fontSize: 20, fontFamily: 'Zapfino' }}>Zapfino </Text>
  
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
  formsContainer: {
    alignItems: "center",
    flex: 1
  },
  formHeader: {
    fontSize: 25,
    color: "#114260",
    fontWeight: "bold"
  },
  formsText: {
    paddingTop: 40,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fcec01",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  formButtonText: {
    color: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#fcec01",
    width: wp("70%"),
    textAlign: "center"
  }
});

export default Contact;
