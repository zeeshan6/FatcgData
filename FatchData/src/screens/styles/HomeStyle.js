import {StyleSheet,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ADC5CA'
    },

    TextInputStyling: {
        width: '97%',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        color: 'black',
        backgroundColor: '#FFFFFF',
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
        fontSize: width*0.03,
        color: 'white',
        textAlign: 'center'
    },
    openButton: {
        backgroundColor: "blue",
        borderRadius: 20,
        // padding: 10,
        width: '25%',
        height: '40%',
        elevation: 2,
        marginTop: 25
    },

    openButtonModal: {
        // backgroundColor: "#F194FF",
        borderRadius: 20,
        width: '40%',
        elevation: 2
      },

    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    modalItemLogin: {  
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    }, 
    modalListImage: {
        backgroundColor: 'transparent',
        height: 60,
        width: 60,
        borderRadius: 10
    },

    modalImage: {
        backgroundColor: 'transparent',
        height: '45%',
        width: '55%',
        borderRadius: 10,
        marginTop: 10
    },

    modalView: {
        marginVertical: width*0.5,
        backgroundColor: "#505050",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        width: '90%',
        height: '50%',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center'
      },
      modalTextName: {
          color: '#fff',
          fontSize: 25,
          
      },
      modalText: {
        color: '#fff',
        fontSize: 20,
        padding: 15
      },

});