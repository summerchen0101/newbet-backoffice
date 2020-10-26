import React, { useState } from 'react';
import { Checkbox } from 'antd';
import levels from '@/lib/levels';

const levelsOptions = Object.keys(levels).map((key) => ({
  label: levels[key],
  value: key,
}));

const CheckboxGroup = Checkbox.Group;

const plainOptions = levelsOptions;
const defaultCheckedList = levelsOptions.map((t) => t.value);
const initState = {
  checkedList: defaultCheckedList,
};
const Component: React.FC = () => {
  const [{ checkedList }, setState] = useState(initState);
  const onChange = (selected) =>
    setState({
      checkedList: selected,
    });
  return (
    <>
      <span>顯示：</span>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
};

export default Component;
