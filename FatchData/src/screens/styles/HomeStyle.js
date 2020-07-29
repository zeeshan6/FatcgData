import {StyleSheet,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1
    },

    TextInputStyling: {
        backgroundColor: "red",
        width: "100%",
    
    },
    buttonContainer: {
        height: 70,
        backgroundColor: '#313135',
        marginHorizontal: 15,
        marginVertical: 8,
        padding: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonHeading: {
        fontSize: 25,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#00f7d2'
    }
    
});