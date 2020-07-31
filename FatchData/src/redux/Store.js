import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionCreators from '../redux/Actions/Action';

import reducers from './reducers/Reducers';

const reducerJoin = combineReducers({reducers});

// const store = createStore(
//     reducer,
//     applyMiddleware(thunk)
// );

const store = createStore(
    reducerJoin,
    // composeWithDevTools(
        applyMiddleware(thunk)
    // )
);

export default store;