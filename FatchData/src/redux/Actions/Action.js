import {
    SET_INITIAL_STATE,
    SET_USER_DATA
} from '../user/user';

export const setInitialState = (totalUserData) => {
    return{
        user: SET_INITIAL_STATE,
        payload:{
            totalUserData: totalUserData
        }
    }
};

export const setUserData = (
        name,
        avatar_url,
        following,
        followers,
        html_url,
        login,
        location,
        message,
        email) => {
    return{
        user: SET_USER_DATA,
        payload:{
            name: name,
            avatar_url:avatar_url,
            following:following,
            followers:followers,
            html_url:html_url,
            login:login,
            location:location,
            message:message,
            email:email
        }
    }
};