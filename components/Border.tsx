import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
}

interface State {
}

export default class Border extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100
  },
});
