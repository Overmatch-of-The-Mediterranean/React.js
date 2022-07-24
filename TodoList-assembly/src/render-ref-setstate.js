import React, { Component, Fragment } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.handleCounterAdd = this.handleCounterAdd.bind(this);

        this.state = {
            counter: 1
        }
    }

    handleCounterAdd() {
        console.log(this.buttonEle.clientTop);
        console.log(this.divEle.innerHTML);
        const newCounter = this.state.counter + 1;

        // this.setState是异步执行的，可以使用函数当作参数来传，前一个函数执行完，后一个才执行。
        this.setState(() => {
            return {
                counter: newCounter
            }
        }, () => {
            console.log(this.divEle.innerHTML);
        })
    }
    render() {

        // 当组件首次创建的时候，render会被执行一次
        // 当state数据发生变更时，render会被重新执行
        // 当props数据发生变更时，render会被重新执行。即父组件通过props向子组件传递的数据，若在父组件中数据发生变化，则props发生变化

        // ref写在html标签上，获取的是DOM节点
        // ref写在组件标签上，获取的是组件的js实例对象
        return (
            <Fragment>
                <button
                    onClick={this.handleCounterAdd}
                    ref={(button) => { this.buttonEle = button }}
                >增加</button>
                <div ref={(div) => { this.divEle = div }}>{this.state.counter}</div>
            </Fragment>
        )
    }
}
export default Counter;