import React from 'react'
import Dashboard from '@/components/Dashboard'
import { Card, Col, Row } from 'antd';
import NumberBox from './NumberBox'
import ResultBox from './ResultBox'

const Component: React.FC = () => (
  <Dashboard>
    <Row gutter={16}>
      <Col span={16}>
        <ResultBox />
      </Col>
      <Col span={8}>
        <Row gutter={16}>
          <Col span={12}>
            <NumberBox num={4} title="移桶審核" />
          </Col>
          <Col span={12}>
            <NumberBox num={0} title="結帳審核" />
          </Col>
        </Row>
      </Col>
    </Row>
  </Dashboard>
)



export default Component
