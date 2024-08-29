import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import FavoriteScreen from './screens/FavoriteScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Recipes" component={RecipesScreen} />
        <Drawer.Screen name="Favorites" component={FavoriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
