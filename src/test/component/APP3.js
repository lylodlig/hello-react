import React, {Component} from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: '<h1>动态插入Html</h1>'
        }
    }

    render() {
        return (
            <div>
                <Children obj={this} header={(<h1>这里是Header</h1>)} footer={(<h1>这里是Footer</h1>)}></Children>


                <Children>
                <h1>这里是Header</h1>
                <h1>这里是Footer</h1>
                </Children>

                <Children >
                    {this.state.content}
                    <h1>这里是Footer</h1>
                </Children>
            </div>
        )
    }
}


class Children extends React.Component {
    //添加默认值
    static defaultProps = {
        likedText: '取消',
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.header}
                <h1>我是子组件{this.props.likedText}</h1>
                {this.props.footer}
            </div>
        )
        console.log(this.props.children)
        return (
            <div>
                {this.props.children[0]}
                <h1>我是子组件{this.props.likedText}</h1>
                {this.props.children[1]}
            </div>
        )
    }

}


export function APP() {
    return (<div>
        <Header/>
    </div>)
}

export default APP