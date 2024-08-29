import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const recipes = [
  { id: '1', title: 'Spaghetti Bolognese', image: require('../assets/spaghetti.png') },
  { id: '2', title: 'Chicken Curry', image: require('../assets/chickencurry.png') },
  // Add more recipes here...
];

const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipeContainer}>
            <Image source={item.image} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  recipeContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeTitle: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecipesScreen;
