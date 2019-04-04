import React, {Component} from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <Children obj={this} header={(<h1>这里是Header</h1>)} footer={(<h1>这里是Footer</h1>)}></Children>
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
    }

}


export function APP() {
    return (<div>
        <Header/>
    </div>)
}

export default APP