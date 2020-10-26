import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
const { Column, ColumnGroup } = Table;
import levels from '@/lib/levels';
const levelDatas = {};

for (const level in levels) {
  levelDatas[`${level}_commission`] = 2000;
  levelDatas[`${level}_result`] = 12000;
}

const data = [
  {
    key: 1,
    agent: 'xxx',
    count: 10,
    betting: 32200,
    effective: 28900,
    ...levelDatas,
  },
];

const Component: React.FC = () => {
  return (
    <Table
      dataSource={data}
      size="small"
      scroll={{ x: 800, y: 300 }}
      summary={(data) => {
        const totals = { count: 0, betting: 0, effective: 0 };
        for (const level in levels) {
          totals[`${level}_commission`] = 0;
          totals[`${level}_result`] = 0;
        }
        data.forEach((d) => {
          totals.count += d.count;
          totals.betting += d.betting;
          totals.effective += d.effective;
          for (const level in levels) {
            totals[`${level}_commission`] += d[`${level}_commission`];
            totals[`${level}_result`] += d[`${level}_result`];
          }
        });
        return (
          <Table.Summary.Row
            style={{ textAlign: 'center', backgroundColor: '#eee' }}
          >
            <Table.Summary.Cell index={1}></Table.Summary.Cell>
            <Table.Summary.Cell index={2}>{totals.count}</Table.Summary.Cell>
            <Table.Summary.Cell index={3}>{totals.betting}</Table.Summary.Cell>
            <Table.Summary.Cell index={4}>
              {totals.effective}
            </Table.Summary.Cell>
            {Object.keys(levels).map((level, i) => (
              <React.Fragment key={i}>
                <Table.Summary.Cell index={i}>
                  {totals[`${level}_commission`]}
                </Table.Summary.Cell>
                <Table.Summary.Cell index={i}>
                  {totals[`${level}_result`]}
                </Table.Summary.Cell>
              </React.Fragment>
            ))}
          </Table.Summary.Row>
        );
      }}
    >
      <Column title="代理帳號" dataIndex="agent" key="agent" align="center" />
      <Column title="筆數" dataIndex="count" key="count" align="center" />
      <Column
        title="投注金額"
        dataIndex="betting"
        key="betting"
        align="center"
      />
      <Column
        title="有效金額"
        dataIndex="effective"
        key="effective"
        align="center"
      />
      {Object.keys(levels).map((level) => {
        return (
          <ColumnGroup title={levels[level]} align="center" key={level}>
            <Column
              title="退水"
              dataIndex={`${level}_commission`}
              key={`${level}_commission`}
              align="center"
            />
            <Column
              title="結果"
              dataIndex={`${level}_result`}
              key={`${level}_result`}
              align="center"
            />
          </ColumnGroup>
        );
      })}
    </Table>
  );
};

export default Component;
