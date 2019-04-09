import React, {Component} from 'react';
import {store} from './../store'

//异步
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: store.getState().count
        }
        this.click = this.click.bind(this)
        store.subscribe(() => {
            console.log(store.getState())
            this.setState({
                count: store.getState().count
            })
        });
    }

    click() {
        console.log(store)
        store.dispatch(this.asyncOperate())

    }

    asyncOperate() {
        return (dispatch, getState) => {
            console.log(dispatch, getState
            )
            setTimeout(() => {
                dispatch({type: 'ADD', count: this.state.count + 1})
            }, 1000);

        }

    }

    render() {
        // console.log(store.getState())
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button
                    onClick={this.click}>点击
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