import React from 'react';
import { StyleSheet, View } from 'react-native';
import World from './World';
import InputsContainer from './inputs/InputsContainer';
import Border from './Border'

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
        <Border />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1000,
    height: 500
  },
});
