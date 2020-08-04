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
    },
    FlatListStyle:{
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    items: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
  
    containerModal:{
        // marginHorizontal: 100,
        flex:1,
        justifyContent: 'space-between',
        marginVertical:5, 
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        width: '100%',
        height: width*0.3,
        alignItems: 'center',
        elevation: 100000
    },
    textStyle:{
        fontSize:20,
        color: 'white',
    },
    tinyLogo: {
        // marginTop: 10,
        width: '60%',
        height: '50%',
        borderRadius: 10,
    },
    textStyle2: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    openButton: {
        backgroundColor: "blue",
        borderRadius: 20,
        padding: 10,
        width: '50%',
        height: '15%',
        elevation: 2,
        marginTop: 25
    },

    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#fff',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }

});