import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Services extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

 render() {
    return (
      <SafeAreaView>
      <View style={styles.headerDiv}>
      <Text style={styles.header}>Services</Text>
      <Text style={styles.serviceHelp}>Click on a service we offer for more information</Text>


      </View>
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
  serviceHelp: {
  }
});

export default Services;
