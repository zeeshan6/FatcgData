import {StyleSheet,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADC5CA'
    },

    TextInputStyling: {
        width: '70%',
        borderColor: 'red',
        borderWidth: 3,
        fontWeight: 'bold',
        borderRadius: 12,
        height: 46,
        textAlign:'center',
        color: 'blue',
        marginHorizontal: 4,
        fontSize: 20
        
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
    },

    TextHeading:{
        backgroundColor: '#E0E1E2',
        fontSize: 40,
        textAlign:'center',
    },

    InputAndBtnP:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    }

});