import React from 'react';
import { View, StyleSheet} from 'react-native';
import { MoveSetType } from './MoveSet';
import ButtonsContainer from './ButtonsContainer';
import D_Pad from './D_Pad';
import MenuButton from './Menu_Button';

interface Props {
}

interface State {
}

export default class InputsContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }
    
    render() {
        return (
            <View style={styles.InputsContainer}>
                <D_Pad />
                <View style={styles.lockMenu}>
                    <MenuButton />
                </View>
                <ButtonsContainer />
            </View>  
        )
        
    }
}

const styles = StyleSheet.create({
    InputsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        padding: 30,
        zIndex: 100
    },
    lockMenu: {
        position: 'absolute',
        bottom: 30,
        left: '48%'
    }
});
