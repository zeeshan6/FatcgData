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
    Alert
} from 'react-native';
import {setUserData} from "../../redux/Actions/Action";
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";

// UserList Class
class UserList extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                // Add Modal Link Show Some User Data
            }}>
                <Text style={styles.buttonHeading}>{this.state.userName}</Text>
                <Button title='Open Github Profile' onPress={()=>{
                    // Add Git Hub Link
                }}/>
            </TouchableOpacity>
        );
    }
}


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            avator: '',
            followers: '',
            following: '',
            location: '',
            githubLink: '',
        };
    }

    // componentDidMount(){
    //     this.GetDataInGitHub();
    // }

    GetDataInGitHub(){
        fetch('https://api.github.com/users/zeeshan6').then(res=>res.json()).then(data=>{Alert.alert("Data",JSON.stringify(data))}).catch=(error)=>{console.error(error)};
        
    }


    RenderItem = ({item, index}) => {
        <UserList index={index} />
    }

    keyExtractor = (item, index) => index.toString();

    render(){
        return(
            <View>
                <Text>Testing...</Text>
                <TextInput 
                    onChangeText={(value)=> this.setState({userName: value})} 
                    style={styles.TextInputStyling} 
                    placeholder= "Pass" 
                    placeholderTextColor= "white" >

                </TextInput>

                <Button title='Search' style={styles.searchBtn} onPress={()=>{
                    this.GetDataInGitHub();
                }} />

                {/* <FlatList 
                    data = {this.state.userData}
                    renderItem = {this.RenderItem}
                    keyExtractor = {this.keyExtractor}
                /> */}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        getUsersData: getUsersData(state)
    }
}

export default connect(mapStateToProps,{setUserData})(Home);