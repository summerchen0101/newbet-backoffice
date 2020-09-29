import React from 'react';
import { Button } from 'antd';

const users = [1, 2, 3];
type Props = {
  onFetch: (id: number) => void;
};
const UserButtons: React.FC<Props> = ({ onFetch }) => {
  return (
    <>
      {users.map((t) => (
        <Button onClick={() => onFetch(t)} key={t}>
          User {t}
        </Button>
      ))}
    </>
  );
};

export default UserButtons;
