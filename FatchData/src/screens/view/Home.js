import React, {Component} from 'react';
import styles from '../styles/HomeStyle';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Modal,
    FlatList,
    Button
} from 'react-native';
import {setUserData} from "../../redux/Actions/Action";
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";

// SHow Modal Alert
// class ShowModal  {
//     <Modal>
//         <View>

//         </View>
//     </Modal>
// }


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            userData: []
        };
    }
    
    componentDidMount(){

    }

    GetDataInGitHub(){
        return fetch('https://api.github.com/users').then((response) => {
            this.setState({
                userData: response.users
            });
        }).catch((error) => {
            console.error(error);
        });
    }


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


                <FlatList 
                    data = {this.state.userData}
                    renderItem = {}
                    keyExtractor = {(item, index) => index}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        getUsersData: getUsersData(state,this.state.userData)
    }
}

export default connect(mapStateToProps,{setUserData})(Home);