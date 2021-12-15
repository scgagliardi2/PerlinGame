import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MoveSetType } from './MoveSet';
import Arrow from './Arrow';

interface Props {
}

interface State {
}

export default class D_Pad extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.D_Pad}>
                <Arrow direction={'up'}/>
                <Arrow direction={'left'}/>
                <Arrow direction={'right'}/>
                <Arrow direction={'down'}/>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    D_Pad: {
        width: 200,
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
