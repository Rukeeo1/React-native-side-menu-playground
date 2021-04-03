import React from 'react';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/redux';

import { PhotoDetail, Photos } from './src/screens';

const Drawer = createDrawerNavigator();

console.log(store.getState(),'RO: this is store')

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Photos' component={Photos} />
          <Drawer.Screen name='PhotoDetail' component={PhotoDetail} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
