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
    Linking
} from 'react-native';
import {setInitialState} from "../../redux/Actions/Action";
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";

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
            allData: '',
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

        this.GetDataOnStore = this.GetDataOnStore.bind(this);
    }

    componentDidMount(){
        const url = 'https://api.github.com/users/girl';
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({allData: data})
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

    GetDataOnStore = () =>{
        const userData = this.props.getUsersDatas;
        const key = Object.values(userData);
        Alert.alert("Data", key.toString());
        let tags=[];
        for(var i=0; i < key.length; i++){
            const data = key[i];
            // if (key[i] !== undefined) rv[i] = key[i];
            const userDataValues = userData[data];
            // if(!userData) continue;
            tags.push(
                <View key={i} style={styles.containerModal}>

                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: userDataValues.avatar_url,
                            }}
                        />
                        
                        <Text style={styles.textStyle}>{userDataValues.login}</Text>

                        
                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={() => {
                                Linking.openURL(userDataValues.html_url)
                            }}
                        >                  
                            <Text style={styles.textStyle2}>Go To Githib Profile</Text>
                        </TouchableHighlight>
                    </View>
            );
        }
        return tags;
    }
    
    // renderItem = ({item , index }) => (
    //     <View key={item.key} index={index}>
    //         <Image
    //             style={styles.tinyLogo}
    //             source={{
    //                 uri: item.avatar_url,
    //             }}
    //         />
            
    //         <Text style={styles.textStyle}>{item.login}</Text>

            
    //         <TouchableHighlight
    //             style={styles.openButton}
    //             onPress={() => {
    //                 Linking.openURL(item.html_url)
    //             }}
    //         >                  
    //             <Text style={styles.textStyle2}>Go To Githib Profile</Text>
    //         </TouchableHighlight>
    //     </View>
    // );


    // keyExtractor = (item, index) => index.toString();

    render(){
        return(
            <ScrollView style={styles.container}>
                <View >
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


                        
                        {/* <FlatList
                            data = {this.state.allData}
                            renderItem = {this.renderItem}
                            keyExtractor = {this.keyExtractor}
                        >

                        </FlatList> */}
                    

                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
     return{
            getUsersDatas: getUsersData(state)
        }
}

export default connect(mapStateToProps,{setInitialState})(Home);