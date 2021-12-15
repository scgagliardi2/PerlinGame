import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
}

interface State {
}

export default class Player extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.player}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  player: {
    width: 20,
    height: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    backgroundColor: 'red',
    top: 300,
  },
});
