import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../components/User';
// import { IInitialState } from './store/reducer/count'
import { addCounter, subCounter, userFetchRequest } from './store/actions';
import { RootState } from '../../index';

const App: React.FC<IProps> = (props) => (
  <div>
    <h2>{props.counter}</h2>
    <button onClick={() => props.onAdd(10)}>ADD</button>
    <button onClick={() => props.onSub(10)}>SUB</button>
    <button onClick={() => props.onFetchUser(1)}>GET USER 1</button>
    <button onClick={() => props.onFetchUser(2)}>GET USER 2</button>
    <div>{props.framework}</div>
    <div>{props.user?.name}</div>
    <User name="summer" age={20} specialize="economy" />
  </div>
);

const mapStateToProps = (state: RootState) => ({
  counter: state.count.counter,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (num) => dispatch(addCounter(num)),
  onSub: (num) => dispatch(subCounter(num)),
  onFetchUser: (id) => dispatch(userFetchRequest(id)),
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    compiler: string;
    framework: string;
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
