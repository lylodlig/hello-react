import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {store} from './../store'

//事件
class Header extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }

    click(e) {
        e.stopPropagation()
        console.log("Header Click")
    }

    render() {
        // console.log(store.getState())
        return (
            <div onClick={this.click}>
                <h1>Header</h1>
                <Content/>
            </div>
        )
    }
}

class Content extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)


    }

    componentDidMount() {
        let node = ReactDOM.findDOMNode(this);
        node.addEventListener('click', (e) => {
            console.log("原生事件")
            // e.stopPropagation()
        }, false);
    }

    click(e) {
        e.stopPropagation()
        console.log("Content Click")
    }

    render() {
        // console.log(store.getState())
        return (
            <div onClick={this.click}>
                <h1>Content</h1>

            </div>
        )
    }
}

function APP() {
    return (<div>
        <Header/>
    </div>)
}

export default APP