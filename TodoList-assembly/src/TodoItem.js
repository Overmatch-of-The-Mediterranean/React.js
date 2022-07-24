import React, { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick() {
        const { deleteFunction, index } = this.props;
        // 改变父组件list中的数据
        // 子组件想要和父组件通信,它要调用父组件传递过来的方法
        deleteFunction(index);
    }
    render() {
        // 子组件通过this.props获得父组件传递过来的值
        const { content } = this.props;
        return (<li

            // bind()也可以携带数据当作函数的参数
            // onClick = { this.handleItemClick.bind(this, index) }

            onClick={this.handleItemClick}
            // 表示对value的内容不要去转义，直接输出到li标签的内部,dangerouslySetInnerHTML的值需要是对象,且标签里面不能有东西
            dangerouslySetInnerHTML={{ __html: content }}
        ></li>)
    }
}
export default TodoItem;