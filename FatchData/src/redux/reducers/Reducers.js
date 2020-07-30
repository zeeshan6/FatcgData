import {
    SET_INITIAL_STATE,
    SET_USER_DATA
} from '../user/user';

const initialState = {
    users:{
        name: '',
        avatar_url: '',
        following: '',
        followers: '',
        html_url: '',
        login: '',
        location: '',
        message: '',
        email: ''

    }
}

const Reducers = (state = initialState, action) => {
    switch (action.user) {
        case SET_INITIAL_STATE:
            return action.payload.totalUserData
            break;
        case SET_USER_DATA:
            return  {
                ...state,
                users: Object.assign({},state.users ? state.users:{},{
                    [action.payload.name]: Object.assign({},state.users && state.users[action.payload.name] ? state.users[action.payload.name] :{},{
                        [action.payload.avatar_url]: Object.assign({},state.users && state.users[action.payload.name] &&
                             state.users[action.payload.avatar_url] ? state.users[action.payload.name][action.payload.avatar_url] :{},{
                                [action.payload.following]: Object.assign({}, state.users && state.users[action.payload.name] &&
                                    state.users[action.payload.avatar_url] && state.users[action.payload.following] ? state.users[action.payload.name][action.payload.avatar_url]
                                    [action.payload.following] :{},{
                                        
                                })
                        })
                    })
                })
            }
            break;
        default:
            return state
    }
}

export default Reducers;
