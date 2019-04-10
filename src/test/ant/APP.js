import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import './my.css';
import List from './List'
// const { Layout, Menu, Icon } = antd;

const {Header, Sider, Content} = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout className="body">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    width={500}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span>{this.props.name}</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                    >
                        <List></List>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
SiderDemo.defaultProps = {
    name: "默认值"
}
function APP() {
    return (
        <div>
            <SiderDemo/>
        </div>
    );
}

export default APP