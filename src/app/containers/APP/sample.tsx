import React from 'react';
import { connect } from 'react-redux';
import { User } from 'app/components/User';
import { userFetchRequest } from 'store/actions';
import { RootState } from 'store/index';

const App: React.FC<IProps> = (props) => (
  <div>
    <button onClick={() => props.onFetchUser(1)}>GET USER 1</button>
    <button onClick={() => props.onFetchUser(2)}>GET USER 2</button>
    <div>{props.framework}</div>
    <div>{props.user?.name}</div>
    <div>{props.user?.email}</div>
    <User name="summer" age={20} specialize="economy" />
  </div>
);

const mapStateToProps = (state: RootState) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchUser: (id) => dispatch(userFetchRequest(id)),
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    compiler: string;
    framework: string;
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
