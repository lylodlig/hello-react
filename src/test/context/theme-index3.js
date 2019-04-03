import React, {Component} from 'react';

// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({//没有提供Provider会使用这个默认值
    name: 'Guest',
});

class App extends React.Component {
    render() {
        // const {signedInUser, theme} = this.props;

        // 提供初始 context 值的 App 组件
        return (
            <ThemeContext.Provider >
                    <Layout />
            </ThemeContext.Provider>
        );
    }
}

function Layout() {
    return (
        <div>
            <Content />
        </div>
    );
}

// 一个组件可能会消费多个 context
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {name => (<h1>{name.name}-------{theme}</h1>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

export default App;
