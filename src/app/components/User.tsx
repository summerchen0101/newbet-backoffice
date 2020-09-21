import React from 'react';
import { DatePicker } from 'antd';
interface User {
  name: string;
  age: number;
  specialize: 'economy' | 'programing' | 'marketing';
}
export const User: React.FC<User> = (props) => {
  return (
    <div>
      <DatePicker />
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.specialize}</div>
    </div>
  );
};
