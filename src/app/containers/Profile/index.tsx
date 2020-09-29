import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import UserAction from 'store/global/fetchUser/actions';
import { RootState } from 'store/index';
import { Button } from 'antd';
import { makeSelectUser } from 'app/store/global/selector';
const users = [1, 2, 3];
const UserButtons = (props) => {
  return (
    <>
      {users.map((t) => (
        <Button onClick={() => props.onFetch(t)} key={t}>
          User {t}
        </Button>
      ))}
    </>
  );
};
const UserInfo = (props) => {
  return (
    <>
      <div>{props.user?.name}</div>
      <div>{props.user?.email}</div>
    </>
  );
};

const Component: React.FC = (props) => {
  const dispatch = useDispatch();
  const selectUser = useMemo(makeSelectUser, []);
  const user = useSelector(selectUser);
  const onFetchUser = (id) => dispatch(UserAction.userFetchRequest(id));
  return (
    <>
      <h1>Profile</h1>
      <UserButtons onFetch={onFetchUser} />
      <UserInfo user={user} comp="UserInfo" />
    </>
  );
};

export default Component;
