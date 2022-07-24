import React, { Component } from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
class NewButton extends Component {
    render() {
        return (
            <Link to='/list?a=123'>
                <Button type="primary">Primary Button</Button>
            </Link>
        )
    }
}
export default NewButton;