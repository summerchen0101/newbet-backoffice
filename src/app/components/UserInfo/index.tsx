import React from 'react';
import Wrapper from './Wrapper';

type Props = {
  user: {
    name: string;
    email: string;
  };
};

const UserInfo: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <div>{props.user.name}</div>
      <div>{props.user.email}</div>
    </Wrapper>
  );
};

export default UserInfo;
