import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from './Player';
import InputsContainer from './inputs/ButtonsContainer';

export default function World() {

  return (
    <View style={styles.world}>
        <Player />
    </View>
  );
}

const styles = StyleSheet.create({
  world: {
    width: '200%',
    height: '200%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    zIndex: 0
  },
});
