import React, { Component } from "react";
import axios from "axios";
class LifeFunction extends Component {

    handleClick() {
        console.log('Hello World!');
    }

    componentWillMount() {
        window.addEventListener('click', this.handleClick, false);
    }
    render() {
        return <div>Hello World</div>
    }

    // 当获取Ajax数据的时候要使用componentDidMount
    componentDidMount() {
        const p = axios.get('https://www.fastmock.site/mock/e85283acd24926300e4c1ced32faffa5/weixin/api/getData');
        p.then((res) => {
            console.log(res.data);
        })
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick, false);
    }
}

// 为什么有ajax请求后，绑定的点击事件不起作用？

export default LifeFunction;