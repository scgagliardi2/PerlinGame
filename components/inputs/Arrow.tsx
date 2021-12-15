import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import GlobalConstants from '../GlobalConstants';
import { MoveSetType } from './MoveSet';

interface Props {
    direction: String
}

interface State {
}

export default class Arrow extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        var style: any

        switch (this.props.direction) {
            case 'up':
                style = styles.up
                break
            case 'down':
                style = styles.down
                break
            case 'left':
                style = styles.left
                break
            case 'right':
                style = styles.right
                break
        }

        return (
            <View style={{ alignItems: 'center'}}>
                <TouchableOpacity 
                    style={styles.Arrow}
                >
                    <View style={style}></View>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Arrow: {
        width: 50,
        height: 30,
        margin: 5,
        borderRadius: 8,
        borderWidth: .5,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: GlobalConstants.colors.accent,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        opacity: .4,
        backgroundColor: 'white'
    },
    up: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
    },
    down: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
        transform: [{rotate: '180deg'}]
    },
    left: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
        transform: [{rotate: '270deg'}]
    },
    right: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 7,
        borderBottomWidth: 12,
        borderLeftWidth: 7,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'gray',
        borderLeftColor: 'transparent',
        transform: [{rotate: '90deg'}]
    },
});
