import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';

class Services extends Component {
 render() {
    return (
      <View style={styles.headerDiv}>
      <Text style={styles.header}>Services</Text>
      <Text style={styles.serviceHelp}>Click on a service we offer for more information</Text>
      </View>
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
  serviceHelp: {

  }
});

export default Services;
