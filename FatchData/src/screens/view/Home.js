import React, {Component} from 'react';
import styles from '../styles/HomeStyle';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Modal,
    FlatList,
    Button,
    TouchableOpacity,
    ToastAndroid,
    Alert,
    ListView,
    TouchableHighlight,
    Image,
    TouchableWithoutFeedback,
    Linking,
    Dimensions
} from 'react-native';
import {setInitialState} from "../../redux/Actions/Action";
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";

const {width,height} = Dimensions.get('window');


class OwnModal extends React.Component{
    render(){
        return(
            <View style={styles.containerModal}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: data.item.avatar_url,
                    }}
                /> 

                <Text style={styles.textStyle}>{data.item.name}</Text>

                <Text style={styles.textStyle}>{data.item.followers}</Text>
                <Text style={styles.textStyle}>{data.item.following}</Text>
                <Text style={styles.textStyle}>{data.item.location}</Text>


                
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        Alert.alert("Close")
                    }}
                >                  
                    <Text style={styles.textStyle2}>Close</Text>
                </TouchableHighlight>
            </View>
        );
    }
} 

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allData: '',
            loading: false
            // loginName: '',
            // name: '',
            // avatar: '',
            // followers: '',
            // following: '',
            // location: '',
            // githubLink: '',
            // message: '',
            // email: '',
            // error: null,
            // userInput: '',
            // isModal: false,
            // url: ''
        };

    }

                        // <View style={styles.containerModal}>
                        //         <Image
                        //             style={styles.tinyLogo}
                        //             source={{
                        //                 uri: data.item.avatar_url,
                        //             }}
                        //         /> 

                        //         <Text style={styles.textStyle}>{data.item.name}</Text>

                        //         <Text style={styles.textStyle}>{data.item.followers}</Text>
                        //         <Text style={styles.textStyle}>{data.item.following}</Text>
                        //         <Text style={styles.textStyle}>{data.item.location}</Text>


                                
                        //         <TouchableHighlight
                        //             style={styles.openButton}
                        //             onPress={() => {
                        //                 Alert.alert("Close")
                        //             }}
                        //         >                  
                        //             <Text style={styles.textStyle2}>Close</Text>
                        //         </TouchableHighlight>
                        //     </View>

    // MainButton(title,onPress,key,GitHub,ImageUri) {
    //     return(
    //         <TouchableOpacity onPress={onPress} key={key}>
    //             <View style={{
    //                 justifyContent: 'space-evenly',
    //                 borderTopRightRadius: 15,
    //                 borderBottomLeftRadius: 15,
    //                 elevation: 6,
    //                 width: width*1,
    //                 height: width*0.4,
    //                 marginTop: 15,
    //                 alignItems: 'center',
    //                 backgroundColor: '#D9D8D9',
    //                 // borderWidth: 1,
    //                 // borderColor: 'lightgreen',
    //                 // borderBottomWidth: 0,
    //             }}>
    //                 <Image source={{uri:ImageUri}}/>
    //                 <Text style={{color: 'red', fontWeight: 'bold',}}>{title}</Text>
    //                 <Text style={{color: 'red', fontWeight: 'bold',}}>{GitHub}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    componentDidMount(){
        const url = 'https://api.github.com/users';
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({allData: data,loading: false})
            this.props.setInitialState(this.state.allData);
        }).catch=(error)=>{
            this.setState({error: error})
        };
    }

    // SaveData = ({
    //     name,
    //     avatar_url,
    //     following,
    //     followers,
    //     html_url,
    //     login,
    //     location,
    //     message,
    //     email,
    //     url
    // }) => {
    //     this.setState({
    //         name:name, 
    //         avatar:avatar_url,
    //         followers:followers, 
    //         following:following, 
    //         location:location, 
    //         githubLink: html_url, 
    //         loginName:login,
    //         message:message,
    //         email: email,
    //         url:url
    //     })

        
    // }

    // DataSaveInStore(){
    //     const name = this.state.name;
    //     const avatar = this.state.avatar_url;
    //     const followers = this.state.followers;
    //     const following = this.state.following;
    //     const html_url = this.state.html_url;
    //     const login = this.state.login;
    //     const location = this.state.location;
    //     const message = this.state.message;
    //     const email = this.state.email;
    //     const url = this.state.url;

    //     this.props.setUserData(name,avatar,following,followers,html_url,login,location,message,email);
    //     this.props.setInitialState(this.state.allData);

    //     Alert.alert("Data",JSON.stringify(this.state.allData));
    // }

    // keyExtractor = (item, index) => index.toString();

    // GetDataOnStore = () =>{
    //     const userData = this.props.getUsersDatas;
    //     // Alert.alert("Data", JSON.stringify(userData))
    //     let tags = [];
    //     Object.keys(userData).forEach((key,index,data) => {
    //         tags.push(
    //             // this.MainButton(key.login,onPress(()=>{
    //             //     Alert.alert("Data","Test")
    //             // }),key,index,key.html_url,key.avatar_url)
                // <View key={key} index={index} style={styles.containerModal}>

                //        <Image
                //             style={styles.tinyLogo}
                //             source={{
                //                 uri: key.avatar_url,
                //             }}
                //         />
                        
                //         <Text style={styles.textStyle}>{key.login}</Text>

                        
                //         <TouchableHighlight
                //             style={styles.openButton}
                //             onPress={() => {
                //                 Linking.openURL(key.html_url)
                //             }}
                //         >                  
                //             <Text style={styles.textStyle2}>Go To Githib Profile</Text>
                //         </TouchableHighlight>
                // </View>

    //         );
    //     });
        // const key = Object.values(userData);
        // Alert.alert("Data", key.toString());
        // let tags=[];
        // for(var i=0; i < key.length; i++){
        //     const data = key[i];
        //     const userDataValues = userData[data];
        //     tags.push(
        //         <View key={i} style={styles.containerModal}>

        //                 <Image
        //                     style={styles.tinyLogo}
        //                     source={{
        //                         uri: userDataValues.avatar_url,
        //                     }}
        //                 />
                        
        //                 <Text style={styles.textStyle}>{userDataValues.login}</Text>

                        
                        // <TouchableHighlight
                        //     style={styles.openButton}
                        //     onPress={() => {
                        //         Linking.openURL(userDataValues.html_url)
                        //     }}
                        // >                  
                        //     <Text style={styles.textStyle2}>Go To Githib Profile</Text>
                        // </TouchableHighlight>
        //             </View>
        //     );
        // }
    //     return tags;
    // }

    renderItem(data) {
        return <TouchableOpacity key={data.item.id} style={{backgroundColor: 'transparent'}} onPress={()=>{}} >
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.pokeItemHeader}>{data.item.login}</Text>

                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={() => {
                                Linking.openURL(data.item.html_url)
                            }}
                        >                  
                            <Text style={styles.textStyle2}>Githib Profile</Text>
                        </TouchableHighlight>

                        <Image source={{uri: data.item.avatar_url}} 
                            style={styles.pokeImage}/>
                        
                    </View>
                    
                </TouchableOpacity>
    }

    render(){
        return(
            
            <View  style={styles.container}>
                <Text style={styles.TextHeading}>GitHub User</Text>
                
                <View style={styles.InputAndBtnP}> 
                    <TextInput 
                        onChangeText={(value)=> this.setState({userName: value})} 
                        style={styles.TextInputStyling} 
                        placeholder= "Github Search" 
                        placeholderTextColor= "#D9D8D9" >

                    </TextInput>

                    <Button title='Search'  onPress={()=>{
                        this.GetDataOnStore();
                    }} />
                </View>

                

                    <View>
                        {/* <Modal
                            animationType="slide"
                            isVisible={true}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            }}
                        >
                        
                            
                        </Modal> */}

                        <FlatList
                                data={this.props.getUsersDatas}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()} 
                            />
                    </View>
            </View>
        );
    }

}

const mapStateToProps = (state) => {
     return{
            getUsersDatas: getUsersData(state)
        }
}

export default connect(mapStateToProps,{setInitialState})(Home);