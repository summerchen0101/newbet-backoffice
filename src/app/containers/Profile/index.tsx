import React, { useContext, useMemo, useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import UserAction from 'store/global/User/actions';
import { Button } from 'antd';
import { makeSelectUser, selectUserList } from 'app/store/global/selector';
import UserInfo from 'app/components/UserInfo';
import UserList from 'app/components/UserList';
import UserButtons from 'app/components/UserButtons';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const selectUser = useMemo(makeSelectUser, []);
  const user = useSelector(selectUser);
  const onFetchUser = (id) => dispatch(UserAction.userFetchRequest(id));
  const users = useSelector(selectUserList);
  return (
    <>
      <h1>Profile</h1>
      <UserButtons onFetch={onFetchUser} />
      {user && <UserInfo user={user} />}
      <hr />
      <h1>Users</h1>
      <Button onClick={() => dispatch(UserAction.userListFetchRequest())}>
        Get Users
      </Button>
      <UserList users={users} />
    </>
  );
};

export default Component;
