import React from 'react'
import {ToolBar, Content, SubContent} from "./APP5";
import {HeaderContext} from './HeaderContext'

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>这里是Header</h1>
                <HeaderContext.Provider value={{content: "来自Header的内容"}}>
                    <ToolBar/>
                    <Content/>
                </HeaderContext.Provider>
            </div>
        )
    }
}

export default Header