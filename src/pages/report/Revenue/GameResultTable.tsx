import React, { useEffect } from 'react';
import { Table } from 'antd';
const { Column, ColumnGroup } = Table;
import sports from '@/lib/sports';
import ColorNumberText from '@/components/ColorNumberText';
import moment from 'moment';
moment.locale('zh-tw');

// Mock Data
const sportDatas = {};
for (const sport in sports) {
  sportDatas[`${sport}_normal`] = 3120;
  sportDatas[`${sport}_live`] = -2109;
}

const data = moment.monthsShort().map((m, i) => ({
  key: i,
  month: m,
  ...sportDatas,
}));

// Footer Total
const summary = (data) => {
  const totals = {};
  for (const sport in sports) {
    totals[`${sport}_normal`] = 0;
    totals[`${sport}_live`] = 0;
  }
  data.forEach((d) => {
    for (const sport in sports) {
      totals[`${sport}_normal`] += d[`${sport}_normal`];
      totals[`${sport}_live`] += d[`${sport}_live`];
    }
  });
  const final = {};
  Object.keys(sports).forEach((sport) => {
    final[sport] = totals[`${sport}_normal`] + totals[`${sport}_live`];
  });
  return (
    <>
      <Table.Summary.Row
        style={{ textAlign: 'center', backgroundColor: '#eee' }}
      >
        <Table.Summary.Cell index={1} rowSpan={2}>
          總計
        </Table.Summary.Cell>
        {Object.keys(sports).map((sport, i) => (
          <React.Fragment key={i}>
            <Table.Summary.Cell index={i}>
              <ColorNumberText>{totals[`${sport}_normal`]}</ColorNumberText>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={i}>
              <ColorNumberText>{totals[`${sport}_live`]}</ColorNumberText>
            </Table.Summary.Cell>
          </React.Fragment>
        ))}
      </Table.Summary.Row>
      <Table.Summary.Row
        style={{ textAlign: 'center', backgroundColor: '#eee' }}
      >
        {Object.keys(sports).map((sport, i) => (
          <React.Fragment key={i}>
            <Table.Summary.Cell colSpan={2} index={i}>
              <ColorNumberText>{final[sport]}</ColorNumberText>
            </Table.Summary.Cell>
          </React.Fragment>
        ))}
      </Table.Summary.Row>
    </>
  );
};

const Component: React.FC = () => {
  return (
    <Table
      dataSource={data}
      size="small"
      scroll={{ x: 800 }}
      summary={summary}
      pagination={false}
      bordered
    >
      <Column title="月" dataIndex="month" key="month" align="center" />
      {Object.keys(sports).map((sport) => {
        return (
          <ColumnGroup title={sports[sport]} align="center" key={sport}>
            <Column
              title="單式"
              dataIndex={`${sport}_normal`}
              key={`${sport}_normal`}
              align="center"
              render={(value) => <ColorNumberText>{value}</ColorNumberText>}
            />
            <Column
              title="走地"
              dataIndex={`${sport}_live`}
              key={`${sport}_live`}
              align="center"
              render={(value) => <ColorNumberText>{value}</ColorNumberText>}
            />
          </ColumnGroup>
        );
      })}
    </Table>
  );
};

export default Component;
