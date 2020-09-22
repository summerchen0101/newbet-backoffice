import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import './style.css';
import Sidebar from 'app/components/Sider';
import Header from 'app/components/Header';
import Content from 'app/components/Content';

const { Footer } = Layout;

const Dashboard: React.FC = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }} id="dashboard">
      <Sidebar />
      <Layout className="site-layout">
        <Header />
        <Content />
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
