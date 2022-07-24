import React, { Component, Fragment } from 'react';
import './style.css';
class TodoList extends Component {



    // constructor 在组件创建的第一时刻自动执行
    constructor(props) {
        super(props);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        // 定义两个数据，数据必须在state里面定义
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleInputChange(e) {

        // 改变数据要通过this.setstate(),里面要传对象，也可以传回到函数
        this.setState({
            inputValue: e.target.value
        })
    }

    handleKeyUp(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                list,
                inputValue: ''
            })
        }
    }

    handleItemClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState(
            {
                list
            }
        )
    }

    getListItems() {
        // ES6中对数组循环可以使用map(),参数是一个函数，且map要求必须返回结果
        return this.state.list.map((value, index) => {
            return (
                <li
                    // 提高性能
                    key={index}

                    // 因为每次删除都需要不同的index，所以这个不能放在上面，bind()也可以携带数据当作函数的参数
                    onClick={this.handleItemClick.bind(this, index)}

                    // 表示对value的内容不要去转义，直接输出到li标签的内部,dangerouslySetInnerHTML的值需要是对象
                    dangerouslySetInnerHTML={{ __html: value }}
                >
                </li>
            )
        })
    }
    render() {
        // 这是JS中的普通注释，JSX中<>里面可以写普通注释
        return (
            <Fragment>
                {/* 这是JSX中的注释 */}

                {/* 为了区分JS中的for循环
                    <label for='focus'>请输入内容：</label>要写成下面这种形式
                    <label htmlFor='focus'>请输入内容：</label>
                */}
                <label htmlFor='focus'>请输入内容：</label>
                <input
                    id='focus'
                    // 为了区分class类关键字和样式，要写成className
                    className='input'

                    // 标签里面的属性值是JS表达式时要在最外层加上{}
                    value={this.state.inputValue}
                    // 通过bind()改变函数的this指向，改变为render里面的this指向，即TodoList
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                />
                <ul>
                    {this.getListItems()}
                </ul>
            </Fragment>
        )
    }
}
export default TodoList;