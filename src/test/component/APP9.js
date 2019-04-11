import React, {Component} from 'react';

function Welcome() {
    return <h1>Hello, World</h1>;
}

class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, World Class</h1>;
    }
}

class WelcomeSomething extends Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps:")
        console.log(nextProps, nextContext)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate")
        console.log(nextProps, nextState, nextContext)
        return true
    }

    render() {
        return <h1>Hello,{this.props.text}</h1>
    }
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
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <div>计数：{this.state.count}</div>
                <button onClick={(e) => this.add()}>加1
                </button>
                <WelcomeSomething text={this.state.count}/>
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