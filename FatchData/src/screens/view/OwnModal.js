import React, {Component} from 'react';
import styles from '../styles/HomeStyle';
import {
    View,
    Text,
    Modal,
    Alert,
    Dimensions,
    Image,
    Button
} from 'react-native'; 
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";

const {width,height} = Dimensions.get('window');

class OwnModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
        };
        
    }

    ShowUserData=()=>{
        const data = this.props.getUsersData;
        const keys = Object.values(data);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri: 'https://rilispedia.com/wp-content/uploads/2019/06/footer-bg.jpg'}} style={styles.pokeImage}/>

                <Text>
                    Full Name
                </Text>
                <Text>
                    Follwers
                </Text>
                <Text>
                    Follwing
                </Text>
                <Text>
                    Location
                </Text>

                <Button title='Close' onPress={()=>{
                    this.props.navigation.navigate("Home");
                }}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
           getUsersData: getUsersData(state)
       }
}

export default connect(mapStateToProps,null)(OwnModal);
