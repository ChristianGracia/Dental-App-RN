import React from "react";
import { TabNavigator } from "react-navigation";

import Home from '../views/Home';
import Info from '../views/Info';
import Blog from '../views/Blog';

export const BottomTab = TabNavigator({
  Home: {
    screen: Home,
  },
  Info: {
    screen: Info,
  },
  Blog: {
    screen: Blog,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#deecfb',
    activeBackgroundColor: "#1666ba",
    inactiveTintColor: '#deecfb',
    inactiveBackgroundColor: "#368ce7",

    labelStyle: {
      fontSize: 22,
      marginTop: -20,
    }
  },
});
