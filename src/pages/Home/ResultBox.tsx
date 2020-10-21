import React from 'react';
import styled from 'styled-components';
import { Card, Row, Col } from 'antd';
import { CardProps } from 'antd/lib/card';
import ResultBoxItem from './ResultBoxItem';

const ResultBox = styled(Card)`
  height: 180px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-center: center;
`;

const Component: React.FC<CardProps> = (props) => (
  <ResultBox {...props}>
    <Row gutter={32}>
      <Col span={24}>
        <h2>輸贏結果</h2>
      </Col>
      <ResultBoxItem span={6} title="今日輸贏" num={10000} rate={3.3} />
      <ResultBoxItem span={6} title="本週輸贏" num={10000} rate={-0.3} />
      <ResultBoxItem span={6} title="本月輸贏" num={10000} rate={3.3} />
      <ResultBoxItem span={6} title="上線人數" num={10} />
    </Row>
  </ResultBox>
);

export default Component;
