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
    Dimensions,
    ActivityIndicator
} from 'react-native';
import {setInitialState} from "../../redux/Actions/Action";
import {connect} from "react-redux";
import {getUsersData} from "../../redux/Selectors/Selectors";
import _ from 'lodash';

const {width,height} = Dimensions.get('window');


// class OwnModal extends React.Component{
//     render(){
//         return(
            // <View style={styles.containerModal}>
            //     <Image
            //         style={styles.tinyLogo}
            //         source={{
            //             uri: data.item.avatar_url,
            //         }}
            //     /> 

            //     <Text style={styles.textStyle}>{data.item.name}</Text>

            //     <Text style={styles.textStyle}>{data.item.followers}</Text>
            //     <Text style={styles.textStyle}>{data.item.following}</Text>
            //     <Text style={styles.textStyle}>{data.item.location}</Text>


                
            //     <TouchableHighlight
            //         style={styles.openButton}
            //         onPress={() => {
            //             Alert.alert("Close")
            //         }}
            //     >                  
            //         <Text style={styles.textStyle2}>Close</Text>
            //     </TouchableHighlight>
            // </View>
//         );
//     }
// } 

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
            // email: '',
            error: null,
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

    // SaveData = ({
    //     name,
    //     following,
    //     followers,
    //     location,
    // }) => {
    //     this.setState({
    //         name:name, 
    //         followers:followers, 
    //         following:following, 
    //         location:location, 
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
                            style={styles.pokeImage}/>

                        <Text style={styles.pokeItemHeader}>{item.login}</Text>

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