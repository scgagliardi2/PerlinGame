import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from './Player';
import InputsContainer from './inputs/ButtonsContainer';

export default function World() {

  return (
    <View style={styles.world}>
        <Player />
        <InputsContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  world: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center'
  },
});
