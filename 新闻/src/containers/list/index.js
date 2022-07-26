import React, { Component, Fragment } from "react";
import { List, Typography } from 'antd';
import axios from 'axios';




// function onMarkerMap(d) {
//     var objString = JSON.stringify(d);
//     var datas = JSON.parse(objString);
//     console.log(datas, 'datas');
// }


class PageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <List
                style={{ background: '#fff' }}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark></Typography.Text> {item.title}
                    </List.Item>
                )}
            />
        )
    }
    componentDidMount() {
        axios.get('https://www.fastmock.site/mock/e85283acd24926300e4c1ced32faffa5/weixin/react/api/header')
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data.data.data
                })
                console.log(res.data.data.data);
            })

    }
}
export default PageList;