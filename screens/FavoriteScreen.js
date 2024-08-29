import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorite Recipes</Text>
      {/* Add logic to display favorite recipes */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FavoriteScreen;
