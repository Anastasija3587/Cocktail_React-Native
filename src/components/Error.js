import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Error = () => {
  return (
    <View style={styles.error}>
      <Text style={styles.text}>Something went wrong... Please try again!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
