import React, {Component} from 'react';
import Header from './Header'
import {HeaderContext} from './HeaderContext'

//Context
export class ToolBar extends Component {
    render() {
        return (
            <div>
                <h1>ToolBar</h1>
            </div>
        )
    }
}

export class SubContent extends Component {
    static contextType = HeaderContext

    componentWillMount() {
        console.log("Context=" + this.context.content)
        // this.context.content="修改的Context"
    }

    render() {
        return (
            <div>
                <HeaderContext.Consumer>
                    {value => (<h1>SubContent:{value.content}</h1>)}
                </HeaderContext.Consumer>

            </div>
        )
    }
}

export class Content extends Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
                <SubContent/>
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