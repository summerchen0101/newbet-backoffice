import React from 'react';
import {User} from '../../components/User';
import {connect} from 'react-redux'
// import { IInitialState } from './store/reducer/count'
import {addCounter, subCounter} from './store/actions'
import {RootState} from '../../index'

const App: React.FC<IProps> = (props) => {
  return (
    <div>
      <h2>{props.counter}</h2>
      <button onClick={() => props.onAdd(10)}>ADD</button>
      <button onClick={() => props.onSub(10)}>SUB</button>
      <div>{props.framework}</div>
      <User name="summer" age={20} specialize="economy"></User>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    counter: state.count.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (num) => dispatch(addCounter(num)),
    onSub: (num) => dispatch(subCounter(num)),
  }
}
type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    compiler: string
    framework: string
  }



export default connect(mapStateToProps, mapDispatchToProps)(App)
