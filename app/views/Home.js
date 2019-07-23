import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-navigation';

class Home extends Component {
 render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.headerDiv}>
          <Text style={styles.header}>myADC</Text>
          </View>
          <View style={styles.imgContainer}>
          <Image source={require("../../assets/main.jpg")} style={styles.logoStyle} />
          <View style={styles.newsContainer}>
          <Text style={styles.newsHeader}>News</Text>
          </View>
          </View>
        </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff"
  },
  headerDiv:{
    backgroundColor: '#fcec01',
    height: 90
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#114260',
    marginTop: 15,
  },
  logoStyle: {
    height: hp('30%'),
    width: wp('95%'),
  },
  imgContainer: {
    paddingTop: 70,
    alignItems: 'center'
  },
  newsHeader: {
    fontSize: 40,

  },
  newsContainer: {
    paddingTop: 60,

  }

});

export default Home;
