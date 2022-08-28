import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphangeDetails from './pages/OrphanageDetails';

type RootStackParamList = {
  OrphanagesMap: undefined;
  OrphanageDetails: undefined;
};

export { RootStackParamList };

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen name='OrphanageDetails' component={OrphangeDetails} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;

