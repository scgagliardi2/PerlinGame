import React from 'react';
import { StyleSheet, View } from 'react-native';
import Display from './components/Display';

export default function App() {
  return (
    <View style={styles.center}>
      <Display></Display>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  }
});
