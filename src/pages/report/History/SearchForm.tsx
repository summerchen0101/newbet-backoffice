import React from 'react';
import { Form, Checkbox, Space, Button } from 'antd';
import sports from '@/lib/sports';
import games from '@/lib/games';
import plays from '@/lib/plays';
import categorys from '@/lib/categorys';

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 20 },
};

const SearchForm: React.FC = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        type: ['A', 'B'],
        ball: ['baseball', 'hockey'],
      }}
    >
      <Form.Item
        name="type"
        label="類型"
        labelAlign="left"
        style={{ marginBottom: 16 }}
      >
        <Checkbox.Group style={{ width: '100%' }}>
          <Space size="large">
            <Checkbox value="A">單式</Checkbox>
            <Checkbox value="B">複合過關</Checkbox>
          </Space>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        name="ball"
        label="球類"
        labelAlign="left"
        style={{ marginBottom: 16 }}
      >
        <Checkbox.Group style={{ width: '100%' }}>
          <Space size="large">
            {Object.keys(sports).map((key) => (
              <Checkbox value={key} key={key}>
                {sports[key]}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        name="category"
        label="球種"
        labelAlign="left"
        style={{ marginBottom: 16 }}
      >
        <Checkbox.Group style={{ width: '100%' }}>
          <Space size="large">
            {Object.keys(categorys).map((key) => (
              <Checkbox value={key} key={key}>
                {categorys[key]}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        name="game"
        label="場次"
        labelAlign="left"
        style={{ marginBottom: 16 }}
      >
        <Checkbox.Group style={{ width: '100%' }}>
          <Space size="large">
            {Object.keys(games).map((key) => (
              <Checkbox value={key} key={key}>
                {games[key]}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        name="play"
        label="玩法"
        labelAlign="left"
        style={{ marginBottom: 25 }}
      >
        <Checkbox.Group style={{ width: '100%' }}>
          <Space size="large">
            {Object.keys(plays).map((key) => (
              <Checkbox value={key} key={key}>
                {plays[key]}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          查詢報表
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
