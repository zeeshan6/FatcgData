import React, {Component} from 'react';
import styles from '../styles/HomeStyle';
import {
    View,
    Text,
    TextInput,
    Modal,
    FlatList,
    Button,
    TouchableOpacity,
    Alert,
    TouchableHighlight,
    Image,
    Linking,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import {setInitialState} from "../../redux/Actions/Action";
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";
import _ from 'lodash';

const {width,height} = Dimensions.get('window');

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allData: [],
            loading: false,
            query: '',
            modalVisible: false,
            loginName: '',
            // name: '',
            avatar: '',
            followers: 0,
            following: 0,
            random: 0,
            render2: 0,
            location: '',
            // githubLink: '',
            // message: '',
            error: null,
            // url: ''
        };

    }

    componentDidMount(){
        this.setState({loading: true})
        const url = 'https://api.github.com/users';
        fetch(url).then(res=>res.json())
            .then(data=>{
                this.setState({allData: data,loading: false});
                    this.props.setInitialState(data);
        }).catch=(error)=>{
            this.setState({error: error,loading:false})
        };
    }

    handleClick() {
        const min = 1;
        const max = 100;
        const min2 = 50;
        const max2 = 1;

        const rand = Math.floor( min + Math.random() * (max - min));
        const rand2 = Math.floor( min2 + Math.random() * (max2 - min2));
        this.setState({ random: rand ,render2: rand2});
      }

    renderItem = ({item,index}) => {
        return <TouchableOpacity key={item.id} style={{backgroundColor: '#808080',borderRadius: 20}} onPress={()=>{
                    this.handleClick()
                    this.setState({loginName:item.login, 
                                    avatar:item.avatar_url, 
                                    followers:item.followers, 
                                    following:item.following, 
                                    location:item.location, 
                                    modalVisible: true
                                })
                }} 
                >
                   <View  style={styles.listItemContainer}>

                        <Image source={{uri: item.avatar_url}} 
                            style={styles.modalListImage}/>

                        <Text style={styles.modalItemLogin}>{item.login}</Text>

                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={() => {
                                Linking.openURL(item.html_url) 
                            }}
                        >                  
                            <Text style={styles.textStyle2}>Githib Profile</Text>
                        </TouchableHighlight>

                    </View>
                    
                </TouchableOpacity>
    }

    renderFooter = () => {
        if(!this.state.loading) return null
        return (
            <View style={{paddingVertical:20, borderTopWidth: 1, borderColor: '#CED0CE'}}>
                <ActivityIndicator animating size='large'/>
            </View>
        )
    }

    handleSearch = (text) => {
        const formattedQuery = text.toLowerCase();
        const allData = _.filter(this.props.getUsersDatas, users => {
            if(users.login.includes(formattedQuery)){
                return true
            }
            return false
        })
        this.setState({allData, query: text});
    }

    render(){
        return(
            
            <View  style={styles.container}>
                <Text style={styles.TextHeading} onPress={()=>{Alert.alert("Data",JSON.stringify(this.state.allData))}}>GitHub User</Text>
                
                <View style={styles.InputAndBtnP}> 
                    <TextInput 
                        onChangeText={this.handleSearch}
                        value={this.state.text}
                        style={styles.TextInputStyling} 
                        underlineColorAndroid="transparent"
                        placeholder= "Search Here" 
                        placeholderTextColor= "#D9D8D9" >

                    </TextInput>
                </View>

                    <View>
                        <FlatList
                            data={this.props.getUsersDatas}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()} 
                            ListHeaderComponent={this.renderFooter}
                        />
                    </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.",()=>{
                            this.setState({modalVisible: false});
                        });
                    }}
                >
                        <View style={styles.modalView}>
                            <Image source={{ uri: this.state.avatar }} style={styles.modalImage} />

                            <Text style={styles.modalTextName}>
                                {this.state.loginName}
                            </Text>

                            <View style={{flexDirection: 'row',padding:15}} >
                                <Text style={styles.modalText}>
                                    followers: {this.state.random} 
                                </Text>
                                <Text style={styles.modalText}>
                                    following: {this.state.render2}
                                </Text>
                            </View>
                            
                            <Text style={{color: '#fff',fontSize: 15}}>
                                location: Privte{this.state.location}
                            </Text>

                            <TouchableHighlight
                                style={{ backgroundColor: "#2196F3",width: '50%',height: 35,marginTop:5,alignItems: 'center',borderRadius: 20}}
                                onPress={() => {
                                    this.setState({modalVisible: false});
                                }}
                            >
                                <Text style={styles.textStyle}>Close Modal</Text>
                            </TouchableHighlight>
                        </View>

                    </Modal>
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