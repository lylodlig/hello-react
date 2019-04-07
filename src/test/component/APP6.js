import React, {Component} from 'react';
import {store} from './../store'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: store.getState().count
        }
        store.subscribe(() => {
            console.log(store.getState())
            this.setState({
                count: store.getState().count
            })
        });
    }

    render() {
        console.log(store.getState())
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button
                    onClick={() => store.dispatch({type: 'ADD', count: this.state.count + 1})}>点击
                </button>
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