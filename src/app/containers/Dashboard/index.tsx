import { Layout } from 'antd';
import Wrap from './Wrap';
import React from 'react';
import Sidebar from 'app/components/Sidebar';
import Header from 'app/components/Header';
import Content from 'app/components/Content';
import Footer from 'app/components/Footer';
import LanguageDropdown from 'app/containers/LanguageDropdown';
import ThemeDropdown from 'app/containers/ThemeDropdown';

const Dashboard: React.FC = (props) => {
  return (
    <Wrap id="dashboard">
      <Sidebar />
      <Layout>
        <Header>
          <LanguageDropdown />
          <ThemeDropdown />
        </Header>
        <Content />
        <Footer />
      </Layout>
    </Wrap>
  );
};

export default Dashboard;
