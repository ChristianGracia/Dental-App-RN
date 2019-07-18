import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Blog extends React.Component {
   render() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>myADC!</Text>
      <Image style={styles.imageHeader} source={require("../../assets/main.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcec01',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText:{
    color: '#114260',
    fontWeight: 'bold',
    fontSize: 32,
    paddingBottom: 10,
    marginTop: 10,
  },
  imageHeader:{
    height: hp('30%'),
    width: wp('100%'),

  }
})}

export default Blog;
