import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text style={styles.text}>Getting weather info...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdf6aa',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c2c2c'
  }
});

export default Loading;