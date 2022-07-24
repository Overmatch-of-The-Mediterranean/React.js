// 用来处理JSX语法
import React, { Component, Fragment } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewList from './newList'
import NewButton from './newButton';
import 'antd/dist/antd.css';

// import TodoList from './TodoList';
// import LifeFunction from './Life-function'

class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* react-router-dom版本 v5 和 v6 改版，使用时候有区别 */}
        <Routes>
          <Route path='/list' element={<NewList />} />
          <Route path='/button' element={<NewButton />} />
        </Routes>
      </BrowserRouter>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>
);
