// 用来处理JSX语法
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Layout } from 'antd';

import PageList from './containers/list';
import Detail from './containers/detail';
import AppHeader from './components/Header';
import 'antd/dist/antd.css';
import './style.css';



const { Header, Footer, Content } = Layout;
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth: 1300 }}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className="content">

            {/* 高版本中Switch已经被换成了Routes */}
            <Routes>
              <Route path='/detail' element={<Detail />} />
              <Route path='/' element={<PageList />} />
            </Routes>

          </Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </BrowserRouter >
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
