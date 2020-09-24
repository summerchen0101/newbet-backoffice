import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'app/containers/HomePage';
import Profile from 'app/containers/Profile';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import Board from './Board';
import A from '../A';
import { ThemeProvider } from 'styled-components';

const mapStateToProps = (state: RootState) => ({
  breadcrumb: state.basic.breadcrumb,
});

const { Content } = Layout;

const theme = {
  mainColor: 'blue',
};

const Component: React.FC<ReturnType<typeof mapStateToProps>> = (props) => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {props.breadcrumb.map((label) => (
          <Breadcrumb.Item key={label}>{label}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <ThemeProvider theme={theme}>
        <A>hello!</A>
      </ThemeProvider>
      <Board>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Board>
    </Content>
  );
};

export default connect(mapStateToProps)(Component);
