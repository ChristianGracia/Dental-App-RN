import React from "react";
import { TabNavigator } from "react-navigation";

import Home from '../views/Home';
import Services from '../views/Services';
import Contact from '../views/Contact';

export const BottomTab = TabNavigator({
  Home: {
    screen: Home,
  },
  Services: {
    screen: Services,
  },
  Contact: {
    screen: Contact,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#114260',
    activeBackgroundColor: "#fcec01",
    inactiveTintColor: '#114260',
    inactiveBackgroundColor: "#ffffcc",

    labelStyle: {
      fontSize: 23,
      fontWeight: 'bold',
      paddingBottom: 5,
    }
  }
});
