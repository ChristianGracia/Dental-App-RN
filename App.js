import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      <Image style={styles.imageHeader} source={require("./assets/main.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcec01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    color: '#114260',
    fontWeight: 'bold',
    fontSize: 32,
  },
  imageHeader:{
    height: hp('30%'),
    width: wp('100%'),

  }
});
