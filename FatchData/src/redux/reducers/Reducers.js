import {
    SET_USER_DATA
} from '../user/user';

const initialState = {
    users:[

    ] 
}

const Reducers = (state = initialState, action) => {
    switch (action.user) {
        case SET_USER_DATA:
            return action.payload.totalUserData
            break;
    
        default:
            return state
    }
}

export default Reducers;
