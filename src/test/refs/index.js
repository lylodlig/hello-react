import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
// import logo from './logo.svg';
// import './App.css';

function Children() {
    return (<h1>这里是子</h1>)
}

class Children2 extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.focusInput = this.focusInput.bind(this)
    }

    focusInput() {
        this.myRef.current.focus()
        let dom=ReactDOM.findDOMNode(this.myRef.current)
        console.log(dom)
    }

    render() {
        // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
        // 而外部的组件使用默认的 theme 值
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <input type="button" value={"Click No"} onClick={this.focusInput}/>
                设置
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.clicks=this.clicks.bind(this)
    }

    clicks() {
        //拿到的是组件实例
        console.log(this.myRef)
    }

    render() {
        // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
        // 而外部的组件使用默认的 theme 值
        return (
            <div>
                <Children2 ref={this.myRef}/>
                <input type={"button"} value={"点击"} onClick={this.clicks}/>
            </div>
        );
    }
}


export default App;
