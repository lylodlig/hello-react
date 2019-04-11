import React, {Component} from 'react';
//高阶组件
class Header extends React.Component {

    static test() {
        console.log("测试方法")
    }

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

        static test() {
            WrappedComponent.test()
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
        // new Header().test()
    let NewComponent = withWrap(Header);
     NewComponent.test()
    return (<div>
        <NewComponent/>
    </div>)
}

export default APP