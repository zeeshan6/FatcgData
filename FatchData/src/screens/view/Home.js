import React, { Component } from 'react';
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
    ActivityIndicator,
    ToastAndroid,
} from 'react-native';
import { setInitialState } from "../../redux/Actions/Action";
import { connect } from "react-redux";
import { getUsersData } from "../../redux/Selectors/Selectors";
import _ from 'lodash';

import * as firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

// original id
// const videoAd = firebase.admob().rewarded('ca-app-pub-9879472653351292/3100019171');
// // test id
// // const videoAd = firebase.admob().rewarded('ca-app-pub-9879472653351292/4598361036');

// Test id
// const instertialAd = firebase.admob().interstitial("ca-app-pub-3940256099942544/1033173712");
// original id
const instertialAd = firebase.admob().interstitial("ca-app-pub-7278686077056116/2790779365");

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instertialTime: 20,
            data: [],
            allData: [],
            loading: false,
            query: '',
            modalVisible: false,
            loginName: '',
            avatar: '',
            followers: 0,
            following: 0,
            random: 0,
            render2: 0,
            location: '',
            searchInput: '',
            error: null,
            name: [],
            isShowModalOnSearch: false,
            searchName: '',
            searchImg: '',
            inputValue: '',
            searchGithubFow: '',
            searchGitBtnInModal: false
        };

        this.handleSearch = this.handleSearch.bind(this);

    }


    componentWillUnmount(){
        clearInterval(this.handleInstertialInterval);
        
    }


    componentDidMount() {
        
        this.setState({ loading: true })
        const url = 'https://api.github.com/users';
        fetch(url).then(res => res.json())
            .then(data => {
                if(!data && data === null && data === undefined) Alert.alert("Not Internet","You Don`t Have Internet");
                ToastAndroid.showWithGravity("Your Internet is Slow Please wait Data is Fatching...",ToastAndroid.LONG,ToastAndroid.BOTTOM)
                Alert.alert("Data","Your Internet is Slow Please wait Data is Fatching...");
                this.setState({ loading: false, data: data, allData: data });
                this.props.setInitialState(data);
            }).catch = (error) => {
                this.setState({ error: error, loading: false })
            };

               

        firebase.admob().initialize("ca-app-pub-7278686077056116~6730024376");
        // if(!(__DEV__)){
            this.handleInstertialInterval = this.handleInstertial(this.state.instertialTime);
        // }
    }


    handleInstertial(time){
        var isLoaded = false;
        instertialAd.loadAd(request.build());
        
        instertialAd.on('onAdLoaded', () => {
            isLoaded = true;
        });
    
        instertialAd.on('onAdClosed', () => {
            isLoaded = false;
            setTimeout(()=>{
                instertialAd.loadAd(request.build());
            },3000);
        });
    
        instertialAd.on('onAdFailedToLoad', () => {
            isLoaded = false;
            setTimeout(()=>{
                instertialAd.loadAd(request.build());
            },3000);
        });
    
        return setInterval(()=>{
            if(isLoaded){
                instertialAd.show();
            }else{
                instertialAd.loadAd(request.build());
                instertialAd.show();
            }
        },time*1000); 
    }

    showRendomFwFg() {
        const min = 1;
        const max = 100;
        const min2 = 50;
        const max2 = 1;

        const rand = Math.floor(min + Math.random() * (max - min));
        const rand2 = Math.floor(min2 + Math.random() * (max2 - min2));
        this.setState({ random: rand, render2: rand2 });
    }

    renderItem = ({ item, index }) => {
        if(!item && item === null) Alert.alert("Data","Your Internet is Slow Please wait Data is Fatching...");
        return <TouchableOpacity key={item.id} style={{ backgroundColor: '#808080', borderRadius: 20 }}
            onPress={() => {
                this.showRendomFwFg()
                this.setState({
                    loginName: item.login,
                    avatar: item.avatar_url,
                    followers: item.followers,
                    following: item.following,
                    location: item.location,
                    modalVisible: true
                })
            }}
        >
            <View style={styles.listItemContainer}>

                <Image source={{ uri: item.avatar_url }} 
                    style={styles.modalListImage} />

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
        if (!this.state.loading) return null
        return (
            <View style={{ paddingVertical: 20, borderTopWidth: 1, borderColor: '#CED0CE' }}>
                <ActivityIndicator animating size='large' />
            </View>
        )
    }

    handleSearch = text => {
        const filterName = this.state.allData.filter(dataC => {
            let nameLowercase = (dataC.login).toLowerCase();
            let searchTermLowercase = text.toLowerCase();
            return nameLowercase.indexOf(searchTermLowercase) > -1;
        });
        this.setState({ name: filterName, inputValue: text });
    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.TextHeading}>GitHub User</Text>

                <View style={styles.InputAndBtnP}>
                    <TextInput
                        onChangeText={(text) => this.handleSearch(text)}
                        style={styles.TextInputStyling}
                        placeholder="Search Here"
                        placeholderTextColor="#D9D8D9" >
                    </TextInput>

                    <Button title='Search' onPress={() => {
                        this.state.inputValue ? ToastAndroid.showWithGravity("Searching...", ToastAndroid.SHORT, ToastAndroid.BOTTOM) :
                            ToastAndroid.showWithGravity("Please Enter Name of User Other wise index 0 is Shown you", ToastAndroid.LONG, ToastAndroid.BOTTOM) ? 
                                this.state.searchGitBtnInModal : this.setState({searchGitBtnInModal: true}); 
                        {
                            for (var i = 0; i < this.state.name.length; i++) {
                                const stateName = this.state.name;
                                if (stateName === null || !stateName) {
                                    ToastAndroid.showWithGravity("Please Enter Name First", ToastAndroid.LONG, ToastAndroid.BOTTOM);
                                } else {
                                    const name = stateName[i].login;
                                    const avatar = stateName[i].avatar_url;
                                    const githubFow = stateName[i].html_url;
                                    this.setState({ searchName: name, searchImg: avatar,searchGithubFow:githubFow, isShowModalOnSearch: true });
                                }

                            }
                        }
                    }} />

                </View>

                {/* FlatList Show */}
                <View>
                    <FlatList
                        data={ this.state.allData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={this.renderFooter}
                    />

                <Banner style={styles.ad}
                    unitId="ca-app-pub-7278686077056116/4103861034"
                    // test id
                    // unitId="ca-app-pub-3940256099942544/6300978111"
                    size={Banner.FULL_BANNER}
                    request={request.build()}
                    // onAdLoaded={() => {
                    //     console.warn("ad loaded");
                    // }}
                    // onAdFailedToLoad={(err) => {
                    //     console.warn("fail to load"+err);
                    // }}
                />
                </View>

                



                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.", () => {
                            this.setState({ modalVisible: false });
                        });
                    }}
                >
                    <View style={styles.modalView}>
                        <Image source={{ uri: this.state.avatar }} style={styles.modalImage} />

                        <Text style={styles.modalTextName}>
                            {this.state.loginName}
                        </Text>

                        <View style={{ flexDirection: 'row', padding: 15 }} >
                            <Text style={styles.modalText}>
                                followers: {this.state.random}
                            </Text>
                            <Text style={styles.modalText}>
                                following: {this.state.render2}
                            </Text>
                        </View>

                        

                        <Text style={{ color: '#fff', fontSize: 15 }}>
                            location: Privte{this.state.location}
                        </Text>

                        <TouchableHighlight
                            style={{ backgroundColor: "#2196F3", width: '50%', height: 35, marginTop: 5, alignItems: 'center', borderRadius: 20 }}
                            onPress={() => {
                                this.setState({ modalVisible: false });
                            }}
                        >
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </TouchableHighlight>
                        <Banner style={styles.ad}
                            unitId="ca-app-pub-7278686077056116/4103861034"
                            // test id
                            // unitId="ca-app-pub-3940256099942544/6300978111"
                            size={Banner.FULL_BANNER}
                            request={request.build()}
                            // onAdLoaded={() => {
                            //     console.warn("ad loaded");
                            // }}
                            // onAdFailedToLoad={(err) => {
                            //     console.warn("fail to load"+err);
                            // }}
                        />
                    </View>

                </Modal>

                {/* Search Modal View */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isShowModalOnSearch}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.", () => {
                            this.setState({ isShowModalOnSearch: false });
                        });
                    }}
                >
                    <View style={styles.modalViewOnSearch}>
                        <Image source={{ uri: this.state.searchImg }} style={styles.modalImage} />

                        <Text style={styles.modalTextName}>
                            {this.state.searchName}
                        </Text>

                        <TouchableHighlight
                            style={{ backgroundColor: "#2196F3", width: '50%', height: 35, marginTop: 5, alignItems: 'center', borderRadius: 20 }}
                            onPress={() => {
                                this.setState({ isShowModalOnSearch: false });
                            }}
                        >
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </TouchableHighlight>
                        {this.state.searchGitBtnInModal ? 
                             null : <TouchableHighlight
                                style={{ marginTop: 10, backgroundColor: '#808080', width: '40%', alignItems: 'center', borderRadius: 20 }}
                                onPress={() => {
                                    Linking.openURL(this.state.searchGithubFow)
                                }}
                            >
                                <Text style={{ color: '#fff' }}>Githib Profile</Text>
                        </TouchableHighlight>}

                        <Text style={{ color: '#fff', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                            Your Search is {this.state.searchName} for this List
                        </Text>
                    </View>

                </Modal>
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        getUsersDatas: getUsersData(state)
    }
}

export default connect(mapStateToProps, { setInitialState })(Home);