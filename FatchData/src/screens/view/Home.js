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
    TouchableWithoutFeedback
} from 'react-native';
import {setInitialState} from "../../redux/Actions/Action";
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";
import { ListItem } from 'react-native-elements';
// import { Icon } from 'react-native-vector-icons/Icon';

// UserList Class
class UserList extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                // Add Modal Link Show Some User Data
                
            }}>
                <Text style={styles.buttonHeading}>{this.state.loginName}</Text>
                <Button title='Open Github Profile' onPress={()=>{
                    // Add Git Hub Link
                    this.state.githubLink
                }}/>
            </TouchableOpacity>
        );
    }
}


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // allData: '',
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
            // isModal: false
        };

        this.GetDataOnStore = this.GetDataOnStore.bind(this);
    }

    componentDidMount(){
        const url = 'https://api.github.com/users';
        fetch(url).then(res=>res.json()).then(data=>{
            this.props.setInitialState(data)
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
    //     email
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
    //         email: email
    //     })
    // }

    // GetUser = () => {
    //     const url = 'https://api.github.com/users/'+this.state.userInput;
    //     fetch(url).then(res=>res.json()).then(data=>{
    //         const notFonundMsg = data.message;
    //         notFonundMsg ? this.setState({message:notFonundMsg}) : this.SaveData(data);
    //     }).catch=(error)=>{
    //         this.setState({error: error})
    //     };
    // }

    GetDataOnStore = () =>{
        const userData = this.props.getUsersData;
        // const keys = Object.keys(userData);
        Alert.alert("Data", JSON.stringify(userData));
        
    }

    render(){
        const isModal = this.state.isModal;
        return(
            <View style={styles.container}>
                <Text style={styles.TextHeading}>GitHub User</Text>
                
                <View style={styles.InputAndBtnP}>
                    <TextInput 
                        onChangeText={(value)=> this.setState({userName: value})} 
                        style={styles.TextInputStyling} 
                        placeholder= "Github Search" 
                        placeholderTextColor= "#D9D8D9" >

                    </TextInput>

                    <Button title='Search'  onPress={()=>{
                        this.GetUser();
                    }} />
                </View>
                 
                <View style={styles.containerModal}>

                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: this.state.avatar,
                        }}
                    />
                    
                    <Text style={styles.textStyle}>{this.state.name}</Text>

                    
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.GetDataOnStore();
                        }}
                    >                  
                        <Text style={styles.textStyle2}>Add in List</Text>
                    </TouchableHighlight>
                </View>
                

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        getUsersData: getUsersData(state)
    }
}

export default connect(mapStateToProps,{setInitialState})(Home);