import { Dimensions } from "react-native";

export default {
    colors: {  
        primary: 'cornflowerblue',
        accent: 'black',
    },
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
}