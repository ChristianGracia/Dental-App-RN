import React from 'react';
import { StackNavigator } from 'react-navigation';

import Services from '../views/Services';
import MoreInfo from '../views/MoreInfo';

const AppNavigator = StackNavigator({
  Services: { screen: Services },
  Services: { screen: MoreInfo }
});

export default AppNavigator
