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
    activeTintColor: '#114260',
    activeBackgroundColor: "#fcec01",
    inactiveTintColor: '#114260',
    inactiveBackgroundColor: "#ffffcc",

    labelStyle: {
      fontSize: 22,
      marginTop: -20,
    }
  }
});
