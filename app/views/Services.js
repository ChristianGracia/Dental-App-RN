import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AppNavigator from '../config/AppNavigator';

import MoreInfo from './MoreInfo';


class Services extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showList: true,
      showItem: ''
    }
  }
  handleClick = (item) => {
    var check = item.key

    this.setState({showList: false});
    this.setState({showItem: item.key})

    alert(this.state.showItem);
  }

 render() {
    return (
      <SafeAreaView>
      <ScrollView style={styles.scrollStyle}>
      <View style={styles.headerDiv}>
      <Text style={styles.header}>Services</Text>
      </View>
      <Text style={styles.serviceHelp}>Click on a service we offer for more information</Text>


          {this.state.showList ? (<FlatList style={styles.list}
            data={[
              {key: 'Crowns'},
              {key: 'Implants'},
              {key: 'Root Canals'},
              {key: 'Botox'},
              {key: 'Veneers'},
              {key: 'Sleep Apnea'},
              {key: 'Dentures'},
              {key: 'Bleaching'},
              {key: 'Fillers'}
            ]}
            renderItem={({item}) =>

            <TouchableOpacity style={styles.listItemButton} onPress={ () => this.handleClick(item)}><Text style={styles.listItemText}>{item.key}</Text></TouchableOpacity>}

            />): null}

            <Text>{this.state.showItem}</Text>





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
    paddingBottom: 25,
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
