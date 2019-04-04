import React, {Component} from 'react';

function Welcome() {
    return <h1>Hello, World</h1>;
}

class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, World Class</h1>;
    }
}

function WelcomeSomething(props) {
    return <h1>Hello,{props.text}</h1>
}

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 1}
    }

    add() {
        //不要直接修改state
        // this.state.count = 10
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((prevState) => ({
            count: prevState.count
        }))
    }

    render() {
        return (
            <div>
                <div>计数：{this.state.count}</div>
                <button onClick={(e) => this.add()}>加1
                </button>
            </div>
        )
    }
}

export function APP() {
    return (<div>
        <Welcome/>
        <WelcomeClass/>

        <WelcomeSomething text={"React"}/>
        <Counter/>
    </div>)
}

export default APP