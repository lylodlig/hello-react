import React, {Component} from 'react';
//高阶组件
class Header extends React.Component {

    render() {
        return (
            <div>
                MyName is :{this.props.data}
            </div>
        )
    }
}

function withWrap(WrappedComponent) {
    return class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                user: ""
            }
            localStorage.setItem('user', '李枝宇')
        }

        componentWillMount() {
            let user = localStorage.getItem('user');
            this.setState({
                user: user
            })
        }

        render() {
            return (<WrappedComponent data={this.state.user}/>)
        }
    }
}

export function APP() {
    let NewComponent = withWrap(Header);
    return (<div>
        <NewComponent/>
    </div>)
}

export default APP