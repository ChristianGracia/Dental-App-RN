import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-navigation';

class Services extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showList: true;
    }
  }

 render() {
    return (
      <SafeAreaView>
      <ScrollView style={styles.scrollStyle}>
      <View style={styles.headerDiv}>
      <Text style={styles.header}>Services</Text>
      </View>
      <Text style={styles.serviceHelp}>Click on a service we offer for more information</Text>


            <FlatList style={styles.list}
            data={[
              {key: 'Crowns'},
              {key: 'Implants'},
              {key: 'Root Canals'},
              {key: 'Botox'},
              {key: 'Veneers'},
              {key: 'Sleep Apnea'},
              {key: 'Dentures'},
              {key: 'Bleaching'},
              {key: 'fillers'}
            ]}
            renderItem={({item}) =>

            <TouchableOpacity style={styles.listItemButton}><Text style={styles.listItemText}>{item.key}</Text></TouchableOpacity>}

            />


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
  serviceHelp: {
    paddingTop: 30,
    paddingBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  listItemButton: {
  },
  listItemText: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 20,
    fontWeight: 'bold',
    color: '#114260'
  },
  list: {
  },
  scrollStyle: {
  }
});

export default Services;
