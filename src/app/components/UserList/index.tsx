import React from 'react';
import UserInfo from 'app/components/UserInfo';

type User = {
  name: string;
  email: string;
};
type Props = {
  users: User[];
};

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <>
      {users.map((u) => (
        <UserInfo key={u.name} user={u} />
      ))}
    </>
  );
};

export default UserList;
