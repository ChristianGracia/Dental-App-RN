import React from "react";
import { TabNavigator } from "react-navigation";

import Home from "../views/Home";
import Services from "../views/Services";
import More from "../views/More";

export const BottomTab = TabNavigator(
  {
    Home: {
      screen: Home
    },
    Services: {
      screen: Services
    },
    More: {
      screen: More
    }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#114260",
      activeBackgroundColor: "#fcec01",
      inactiveTintColor: "#114260",
      inactiveBackgroundColor: "#ffffcc",

      labelStyle: {
        fontSize: 23,
        fontWeight: "bold",
        paddingBottom: 5
      }
    }
  }
);
