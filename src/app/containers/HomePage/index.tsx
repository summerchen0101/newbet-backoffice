import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { userFetchRequest } from 'app/store/global/actions';
import { RootState } from 'store/index';
import { Button } from 'antd';
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

const AddCountBtn = (props) => {
  return <button onClick={props.onClick}>Add Count</button>;
};

const Counter = (props) => {
  return <h2>{props.count}</h2>;
};
const MemoCounter = React.memo(Counter);
const Component: React.FC<IProps> = (props) => {
  const [count, setState] = useState(0);
  const onClick = () => setState((val) => ++val);
  return (
    <>
      <MemoCounter count={count} />
      <AddCountBtn onClick={onClick} comp="AddCountBtn" />
      <UserButtons onFetch={props.onFetchUser} />
      <UserInfo user={props.user} comp="UserInfo" />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.global.user,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchUser: (id) => dispatch(userFetchRequest(id)),
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Component);
