import { Dropdown, Menu } from 'antd';
import React from 'react';
import DropdownLabel from 'app/components/DropdownLabel';

type Props = {
  title: string;
  menu: React.ReactElement;
};

const Component: React.FC<Props> = (props) => {
  return (
    <Dropdown overlay={props.menu} {...props}>
      <DropdownLabel title={props.title} />
    </Dropdown>
  );
};

export default Component;
