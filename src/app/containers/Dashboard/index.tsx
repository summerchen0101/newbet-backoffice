import { Layout } from 'antd';
import Wrap from './Wrap';
import React from 'react';
import Sidebar from 'app/components/Sider';
import Header from 'app/components/Header';
import Content from 'app/components/Content';
import Footer from 'app/components/Footer';

const Dashboard: React.FC = (props) => {
  return (
    <Wrap id="dashboard">
      <Sidebar />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Wrap>
  );
};

export default Dashboard;
