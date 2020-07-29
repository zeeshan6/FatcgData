import {
    SET_USER_DATA
} from '../user/user';

export const setUserData = (totalUserData) => {
    return{
        user: SET_USER_DATA,
        payload:{
            totalUserData: totalUserData
        }
    }
};