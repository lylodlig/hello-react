import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

import {ThemeContext, themes} from './theme-context2';
import ThemeTogglerButton from './themed-button2';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };

        // State 也包含了更新函数，因此它会被传递进 context provider。
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        // 整个 state 都被传递进 provider
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Content/>
                </ThemeContext.Provider>
                <Content/>
            </div>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton/>
        </div>
    );
}

export default App;
