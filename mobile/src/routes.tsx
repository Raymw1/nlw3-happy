import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphangeDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';

type RootStackParamList = {
  OrphanagesMap: undefined;
  OrphanageDetails: undefined;
  SelectMapPosition: undefined;
  OrphanageData: undefined;
};

type ScreenProps = StackNavigationProp<RootStackParamList>;

export { ScreenProps };

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen
          name='OrphanageDetails'
          component={OrphangeDetails}
          options={{ 
            headerShown: true,
            header: () => <Header title='Orphanage' showCancel={false} />
          }} 
        />
        <Screen
          name='SelectMapPosition'
          component={SelectMapPosition}
          options={{ 
            headerShown: true,
            header: () => <Header title='Spot on the map' />
          }} 
        />
        <Screen
          name='OrphanageData'
          component={OrphanageData}
          options={{ 
            headerShown: true,
            header: () => <Header title='Provide the data' />
          }} 
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;

