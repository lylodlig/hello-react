import {createStore} from 'redux'
import addReducer from "./component/addReducer";

export const store = createStore(addReducer, {count: 0})