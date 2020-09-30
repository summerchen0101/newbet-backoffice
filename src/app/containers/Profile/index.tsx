import React, { useContext, useMemo, useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import UserAction from 'store/global/User/actions';
import { Button } from 'antd';
import { makeSelectUser, selectUserList } from 'app/store/global/selector';
import UserInfo from 'app/components/UserInfo';
import UserList from 'app/components/UserList';
import UserButtons from 'app/components/UserButtons';
import { CustomStore } from 'app/customStore';
import { selectUserName } from 'app/customStore/user/selector';

const Component: React.FC = () => {
  const { store, mutate } = useContext(CustomStore);
  const name = selectUserName(store);
  const dispatch = useDispatch();
  const selectUser = useMemo(makeSelectUser, []);
  const user = useSelector(selectUser);
  const onFetchUser = (id) => dispatch(UserAction.userFetchRequest(id));
  const users = useSelector(selectUserList);
  return (
    <>
      <h1>Profile</h1>
      <p>{name}</p>
      <UserButtons onFetch={onFetchUser} />
      {user && <UserInfo user={user} />}
      <hr />
      <h1>Users</h1>
      <Button onClick={() => dispatch(UserAction.userListFetchRequest())}>
        Get Users
      </Button>
      <UserList users={users} />
      <hr />
      <h2>{store.user.name}</h2>
      <button
        onClick={() => mutate({ type: 'UPDATE_USER_NAME', name: 'cindy' })}
      >
        cindy
      </button>
    </>
  );
};

export default Component;
