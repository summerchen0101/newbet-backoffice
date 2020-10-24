import React from 'react';
import { Breadcrumb } from 'antd';
interface ILevel {
  path: string;
  role: string;
  account: string;
  nick: string;
}
const levels: ILevel[] = [
  {
    path: '/',
    role: '站長',
    account: 'bill999',
    nick: '比爾',
  },
  {
    path: '/',
    role: '大總監',
    account: 'jack',
    nick: 'Jack',
  },
];

const BreadcrumbText: React.FC<ILevel> = ({ role, account, nick }) => {
  return (
    <>
      <span style={{ color: 'red' }}>[{role}]</span> {account}({nick})
    </>
  );
};

const Component: React.FC = () => {
  return (
    <Breadcrumb style={{ marginBottom: 20 }}>
      <Breadcrumb.Item>全部</Breadcrumb.Item>
      {levels.map((t, i) => (
        <Breadcrumb.Item key={i}>
          {i === levels.length - 1 ? (
            <BreadcrumbText {...t} />
          ) : (
            <a href="">
              <BreadcrumbText {...t} />
            </a>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Component;
