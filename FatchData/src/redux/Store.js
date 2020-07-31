import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import * as actionCreators from '../redux/Actions/Action';

import reducers from './reducers/Reducers';

const reducer = combineReducers({reducers});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

// const store = () => {
//     return createStore(reducer);
// }

// const store = createStore(
//     reducerJoin,
//     composeWithDevTools(
//         applyMiddleware(thunk)
//     )
// );

export default store;