import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../components/User';
// import { IInitialState } from './store/reducer/count'
import { addCounter, subCounter } from './store/actions';
import { RootState } from '../../index';

const App: React.FC<IProps> = (props) => (
  <div>
    <h2>{props.counter}</h2>
    <button onClick={() => props.onAdd(10)}>ADD</button>
    <button onClick={() => props.onSub(10)}>SUB</button>
    <div>{props.framework}</div>
    <User name="summer" age={20} specialize="economy" />
  </div>
);

const mapStateToProps = (state: RootState) => ({
  counter: state.count.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (num) => dispatch(addCounter(num)),
  onSub: (num) => dispatch(subCounter(num)),
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    compiler: string;
    framework: string;
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
