import React from 'react';
import { StyleSheet, View } from 'react-native';
import World from './World';
import InputsContainer from './inputs/InputsContainer';

interface Props {
}

interface State {
}

export default class Display extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <World />
        <InputsContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    width: 1000,
    height: 500,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2
  },
});
