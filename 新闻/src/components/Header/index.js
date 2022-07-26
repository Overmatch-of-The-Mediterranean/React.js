import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import React, { Component, Fragment, useState } from 'react';
import logo from './logo.png'
import './style.css';
import { Menu } from 'antd';
import { MailOutlined, ScheduleOutlined, SecurityScanOutlined, SmileOutlined, ShakeOutlined, ProjectOutlined } from '@ant-design/icons';
// import Item from 'antd/lib/list/Item';
import axios from 'axios';


// const items = [
//     {
//         label: 'VOA慢速英语',
//         key: '1',
//         icon: <MailOutlined />,
//         to: '/ccc'
//     },
//     {
//         label: 'VOA常速英语',
//         key: '2',
//         icon: <ScheduleOutlined />,
//         // disabled: true,
//     },
//     {
//         label: 'VOA英语教学',
//         key: '3',
//         icon: <SecurityScanOutlined />,
//     },
//     {
//         label: '走遍英国',
//         key: '4',
//         icon: <SmileOutlined />,
//     },
//     {
//         label: '空中英语教室',
//         key: '5',
//         icon: <ShakeOutlined />,
//     },
//     {
//         label: '大家说英语',
//         key: '6',
//         icon: <ProjectOutlined />,
//     }
// ];



class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }


    getMenuItems() {
        // console.log(this.state.list);
        return this.state.list.map(item => {
            return (

                <Menu.Item className='app-header-menu' key={item.id} icon={<MailOutlined />}>
                    {item.title}
                </Menu.Item>

            )
        })
    }


    componentDidMount() {
        axios.get('https://www.fastmock.site/mock/e85283acd24926300e4c1ced32faffa5/weixin/react/api/header')
            .then((res) => {
                // console.log(res);
                this.setState({
                    list: res.data.data.list
                })
            })
    }
    render() {
        return (
            <Fragment>
                <img src={logo} className="app-header-logo" />
                <Menu mode="horizontal"
                    defaultSelectedKeys={['mail']}
                >
                    {this.getMenuItems()}
                </Menu>

                {/* <Menu className="app-header-menu" mode="horizontal" items={items} /> */}

            </Fragment>
        )
    }


}
export default AppHeader;