import {
    SET_INITIAL_STATE,
    SET_USER_DATA
} from '../user/type';

const initialState = { 
    userD:{
        // name: '',
        // avatar_url: '',
        // following: '',
        // followers: '',
        // html_url: '',
        // login: '',
        // location: '',
        // message: '',
        // email: ''

    }
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_STATE:
            return {
                ...state,
                userD: action.payload.userData
            };
        // case SET_USER_DATA:
        //     return  {
        //         ...state,
        //         users: Object.assign({},state.users ? state.users:{},{
        //             [action.payload.name]: Object.assign({},state.users && state.users[action.payload.name] ? state.users[action.payload.name] :{},{
        //                 [action.payload.avatar_url]: Object.assign({},state.users && state.users[action.payload.name] &&
        //                      state.users[action.payload.avatar_url] ? state.users[action.payload.name][action.payload.avatar_url] :{},{
        //                         [action.payload.following]: Object.assign({}, state.users && state.users[action.payload.name] &&
        //                             state.users[action.payload.avatar_url] && state.users[action.payload.following] ? state.users[action.payload.name][action.payload.avatar_url]
        //                             [action.payload.following] :{},{
        //                                 [action.payload.followers]: Object.assign({}, state.users && state.users[action.payload.name] &&
        //                                     state.users[action.payload.avatar_url] && state.users[action.payload.following] && state.users[action.payload.followers] ? 
        //                                     state.users[action.payload.name][action.payload.avatar_url][action.payload.following][action.payload.followers] :{},{
        //                                         [action.payload.html_url]: Object.assign({}, state.users && state.users[action.payload.name] &&
        //                                             state.users[action.payload.avatar_url] && state.users[action.payload.following] && state.users[action.payload.followers] &&
        //                                             state.users[action.payload.html_url] ? state.users[action.payload.name][action.payload.avatar_url][action.payload.following]
        //                                             [action.payload.followers][action.payload.html_url] :{},{
        //                                                 [action.payload.login]: Object.assign({}, state.users && state.users[action.payload.name] &&
        //                                                     state.users[action.payload.avatar_url] && state.users[action.payload.following] && state.users[action.payload.followers] &&
        //                                                     state.users[action.payload.html_url] && state.users[action.payload.login] ? state.users[action.payload.name][action.payload.avatar_url][action.payload.following]
        //                                                     [action.payload.followers][action.payload.html_url][action.payload.login] :{},{
        //                                                         [action.payload.location]: Object.assign({}, state.users && state.users[action.payload.name] &&
        //                                                             state.users[action.payload.avatar_url] && state.users[action.payload.following] && state.users[action.payload.followers] &&
        //                                                             state.users[action.payload.html_url] && state.users[action.payload.login] && state.users[action.payload.location] ?
        //                                                             state.users[action.payload.name][action.payload.avatar_url][action.payload.following]
        //                                                             [action.payload.followers][action.payload.html_url][action.payload.login][action.payload.location] :{},{
        //                                                                 [action.payload.message]: Object.assign({}, state.users && state.users[action.payload.name] &&
        //                                                                     state.users[action.payload.avatar_url] && state.users[action.payload.following] && state.users[action.payload.followers] &&
        //                                                                     state.users[action.payload.html_url] && state.users[action.payload.login] && state.users[action.payload.location] &&
        //                                                                     state.users[action.payload.message] ? state.users[action.payload.name][action.payload.avatar_url][action.payload.following]
        //                                                                     [action.payload.followers][action.payload.html_url][action.payload.login][action.payload.location][action.payload.message] :{},{
        //                                                                         [action.payload.email]: Object.assign({}, state.users && state.users[action.payload.name] &&
        //                                                                             state.users[action.payload.avatar_url] && state.users[action.payload.following] && state.users[action.payload.followers] &&
        //                                                                             state.users[action.payload.html_url] && state.users[action.payload.login] && state.users[action.payload.location] &&
        //                                                                             state.users[action.payload.message] && state.users[action.payload.email] ? 
        //                                                                             state.users[action.payload.name][action.payload.avatar_url][action.payload.following]
        //                                                                             [action.payload.followers][action.payload.html_url][action.payload.login][action.payload.location][action.payload.message][action.payload.email] :{})
        //                                                                     })
        //                                                             })
        //                                                     })
        //                                             })
        //                                     })
        //                         })
        //                 })
        //             })
        //         })
        //     };
        default:
            return state;
    }
};

export default reducers;
