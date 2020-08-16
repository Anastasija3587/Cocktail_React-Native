import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
