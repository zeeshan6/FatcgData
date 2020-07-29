import {Provider} from 'react-redux';
import store from "./src/redux/Store";
import React from "react";
import Home from "./src/screens/view/Home";

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Home/>
            </Provider>
        )
    }
}