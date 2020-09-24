import React from 'react';
import { connect } from 'react-redux';
import { userFetchRequest } from 'app/store/global/actions';
import { RootState } from 'store/index';
import { Button } from 'antd';
const users = [1, 2, 3];
const Component: React.FC<IProps> = (props) => (
  <div>
    {users.map((t) => (
      <Button onClick={() => props.onFetchUser(t)} key={t}>
        User {t}
      </Button>
    ))}
    <div>{props.user?.name}</div>
    <div>{props.user?.email}</div>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  user: state.global.user,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchUser: (id) => dispatch(userFetchRequest(id)),
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Component);
