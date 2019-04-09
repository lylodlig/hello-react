import {createStore, applyMiddleware} from 'redux'
import addReducer from "./component/addReducer";
import thunk from 'redux-thunk';
const middleware = [thunk]

export const store = createStore(addReducer, {count: 0}, applyMiddleware(...middleware))