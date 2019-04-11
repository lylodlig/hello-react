import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './test/redux/reducers'
// import App from './App';
// import App from './test/context/theme-index3';
// import App from './test/error_boundary/index';
// import App from './test/redux/components/App';
// import App from './test/refs/index';
import App from './test/component/APP11';
// import App from './test/ant/APP';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
const store = createStore(rootReducer)
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
;
//
// ReactDOM.render(<Provider store={store}>
//     <App/>
// </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
