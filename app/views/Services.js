import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, FlatList, Button} from 'react-native';
import { SafeAreaView } from 'react-navigation';

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

  }
  resetList = () => {
    this.setState({showList: true});
    this.setState({showItem: ""})
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

            <Text style={styles.itemPick}>{this.state.showItem}</Text>
            {this.state.showItem ? (<TouchableOpacity style={styles.backButton} onPress={this.resetList}><Text style={styles.buttonText}>Back</Text></TouchableOpacity>): null}

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
  },
  itemPick: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
    color: '#114260'
  },
  backButton: {
    paddingTop: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#114260',
    backgroundColor: '#fcec01',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: '#fff',
  }
});

export default Services;
