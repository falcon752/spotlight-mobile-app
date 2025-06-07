import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bookmarks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Bookmarked Items</Text>
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
