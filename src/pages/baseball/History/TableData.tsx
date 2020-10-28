import React, { useEffect } from 'react';
import Table from '@/components/Table';
import TableHead from '@/components/TableHead';
import TableBody from '@/components/TableBody';
import plays from '@/lib/plays';
import _ from 'lodash';
import { EyeFilled } from '@ant-design/icons';

const columns = [
  {
    title: '明細',
    dataIndex: 'view',
    width: 50,
    render: (value) => {
      return (
        <div style={{ fontSize: 20, textAlign: 'center' }}>
          <a>
            <EyeFilled />
          </a>
        </div>
      );
    },
  },
  {
    title: '帳務日期',
    dataIndex: 'checkoutAt',
    width: '12%',
  },
  {
    title: '比賽時間',
    dataIndex: 'startAt',
    width: '15%',
  },
  {
    title: '對陣',
    dataIndex: 'teams',
    width: '12%',
    render: (teams) => {
      return (
        <>
          <div>{teams.teamA}</div>
          <div>{teams.teamB}</div>
        </>
      );
    },
  },
  ...Object.keys(plays).map((key) => ({
    title: plays[key],
    dataIndex: key,
    key: key,
    render: (play) => {
      return (
        <>
          <div>{play.teamA.odds}</div>
          <div>{play.teamB.odds}</div>
        </>
      );
    },
  })),
];

const data = [
  {
    checkoutAt: '2020-08-14',
    startAt: '2020-08-13 17:30',
    league: { code: 'A', name: 'NBA' },
    teams: { teamA: '恐龍A', teamB: '樂天巨人' },
    ...Object.keys(plays).reduce((obj, key) => {
      obj[key] = { teamA: { odds: '0.93' }, teamB: { odds: '0.94' } };
      return obj;
    }, {}),
  },
  {
    checkoutAt: '2020-08-14',
    startAt: '2020-08-13 17:30',
    league: { code: 'B', name: 'ABC' },
    teams: { teamA: '恐龍', teamB: '樂天巨人' },
    ...Object.keys(plays).reduce((obj, key) => {
      obj[key] = { teamA: { odds: '0.93' }, teamB: { odds: '0.94' } };
      return obj;
    }, {}),
  },
  {
    checkoutAt: '2020-08-14',
    startAt: '2020-08-13 17:30',
    league: { code: 'A', name: 'NBA' },
    teams: { teamA: '恐龍A', teamB: '樂天巨人' },
    ...Object.keys(plays).reduce((obj, key) => {
      obj[key] = { teamA: { odds: '0.93' }, teamB: { odds: '0.94' } };
      return obj;
    }, {}),
  },
];

const groupByLeague = _.groupBy(data, (d) => d.league.code);
const Component: React.FC = () => {
  return (
    <Table>
      <TableHead columns={columns} />
      {Object.keys(groupByLeague).map((groupKey) => {
        const info = groupByLeague[groupKey][0];
        return (
          <TableBody
            key={groupKey}
            columns={columns}
            title={info.league.name}
            data={groupByLeague[groupKey]}
          />
        );
      })}
    </Table>
  );
};

export default Component;
